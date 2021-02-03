import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/todos/dto/todo.schema';

@Injectable()
export class DetailsService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async findOne(date: number) {
    const todo = this.todoModel.findOne({ date: date }).exec();
    if (!todo) {
      throw new NotFoundException(`Todo #${date} not found`);
    }
    return todo;
  }

  async remove(date: number) {
    const todo = await this.findOne(date);
    return todo.remove();
  }
}
