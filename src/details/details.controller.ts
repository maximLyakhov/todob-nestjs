import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TodosService } from 'src/todos/todos.service';

@Controller('todos/details')
export class DetailsController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':date')
  getSingleTodo(@Param('date') date: number) {
    return this.todosService.findOne(date);
  }

  @Delete(':date')
  deleteTodo(@Param('date') date: number) {
    return this.todosService.remove(date);
  }
}
