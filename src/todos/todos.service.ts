import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginService } from 'src/login/login.service';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './dto/todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
    private readonly loginService: LoginService,
  ) {}

  create(todoDto: TodoDto) {
    const todo = new this.todoModel(todoDto);
    return todo.save();
  }

  findTodos() {
    return this.todoModel
      .find({ userid: this.loginService.currentUser._id })
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
