import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  findTodos() {
    return this.todoModel.find().exec();
  }

  async findOne(date: number) {
    const todo = this.todoModel.findOne({ _id: date }).exec();
    if (!todo) {
      throw new NotFoundException(`Todo #${date} not found`);
    }
    return todo;
  }

  create(createTodoDto: CreateTodoDto) {
    const todo = new this.todoModel(createTodoDto);
    return todo.save();
  }

  async update(date: number, updateTodoDto: UpdateTodoDto) {
    const existingTodo = await this.todoModel
      .findOneAndUpdate({ _id: date }, { $set: updateTodoDto }, { new: true })
      .exec();
    if (!existingTodo) {
      throw new NotFoundException('blabla');
    }
    return existingTodo;
  }

  async remove(date: number) {
    const todo = await this.findOne(date);
    return todo.remove();
  }

  // public todos = [
  //   {
  //     title: 'fasdfadsfasdf',
  //     description: '',
  //     date: 1611571422998,
  //     done: true,
  //   },
  //   {
  //     title: 'fasdfasdfas',
  //     description: 'dfasd',
  //     date: 1611571425125,
  //     done: true,
  //   },
  //   {
  //     title: 'asdfasdfasdf',
  //     description: 'd',
  //     date: 1611571428061,
  //     done: false,
  //   },
  //   {
  //     title: 'fasdfasdfads',
  //     description: 'fd',
  //     date: 1611571431878,
  //     done: false,
  //   },
  //   { title: 'fasdfasdf', description: 'd', date: 1611571434006, done: false },
  //   {
  //     title: 'gadfgsdfgasdfgsdfg',
  //     description: 'sdf',
  //     date: 1611571436669,
  //     done: true,
  //   },
  //   {
  //     title: 'gsdfgsdfgsdf',
  //     description: 'gsd',
  //     date: 1611571438726,
  //     done: true,
  //   },
  //   {
  //     title: 'fgsdfgsdfgsdfg',
  //     description: 'sd',
  //     date: 1611571440901,
  //     done: false,
  //   },
  //   {
  //     title: 'gsdfgsdfgsdfAG34G',
  //     description: 'A',
  //     date: 1611571444622,
  //     done: false,
  //   },
  //   { title: '4534G\\4GAS4', description: '', date: 1611571447365, done: true },
  //   { title: 'ADSFZV34', description: '', date: 1611571451974, done: true },
  //   {
  //     title: '85685GXGBN',
  //     description: '222',
  //     date: 1611571455869,
  //     done: true,
  //   },
  //   {
  //     title: 'ASDFASDFAfasd',
  //     description: 'dfasdfasdf',
  //     date: 1611571549702,
  //     done: true,
  //   },
  //   {
  //     title: 'sdgfhdfghdfgh',
  //     description: 'dfghdfghdgfh',
  //     date: 1611571956236,
  //     done: true,
  //   },
  //   {
  //     title: 'ghdfghdfgh',
  //     description: 'dfgh',
  //     date: 1611571958564,
  //     done: true,
  //   },
  //   {
  //     title: 'fasdfadsfadsfasdf',
  //     description: 'd',
  //     date: 1611572083396,
  //     done: false,
  //   },
  //   {
  //     title: 'fasdfasdfadsf',
  //     description: 'fd',
  //     date: 1611572086732,
  //     done: true,
  //   },
  //   { title: 'asdfasdfasdf', description: '', date: 1611572300203, done: true },
  //   { title: 'pivo', description: '', date: 1611581256432, done: true },
  // ];

  // findTodos() {
  //   return this.todos;
  // }

  // postTodo(data: TodoIn) {
  //   const bakedTodo = {
  //     ...data,
  //     date: Date.now(),
  //     done: false,
  //   };
  //   return this.todos.push(bakedTodo);
  // }

  // deleteTodo(date: number) {
  //   let firingTodoIndex = this.todos.findIndex((e) => e.date === date);
  //   return this.todos.splice(firingTodoIndex, 1);
  // }
}
