import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './dto/todo.schema';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/auth/dto/registration.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  create(todoDto: TodoDto) {
    const todo = new this.todoModel(todoDto);
    return todo.save();
  }

  async findTodos() {
    const decodedToken = this.jwtService.decode(this.authService.currentToken);
    const decodedEmail = JSON.parse(JSON.stringify(decodedToken)).email;
    const matchedUserID = (
      await this.userModel.findOne({ email: decodedEmail })
    )._id;
    return await this.todoModel
      .find({
        userid: matchedUserID,
      })
      .exec();
  }

  async checkTodo(date: number, done: boolean) {
    const todo = await this.todoModel
      .findOneAndUpdate(
        {
          date: date,
        },
        {
          done: !done,
        },
        { useFindAndModify: false },
      )
      .exec();
    return todo;
  }
}
