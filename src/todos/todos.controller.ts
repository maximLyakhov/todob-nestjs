import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.findTodos();
  }

  @Post()
  postTodo(@Body() body: CreateTodoDto) {
    return this.todosService.create(body);
  }
}
