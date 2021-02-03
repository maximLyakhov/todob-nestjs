import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.findTodos();
  }

  @Post()
  postTodo(@Body() body: TodoDto) {
    return this.todosService.create(body);
  }
}
