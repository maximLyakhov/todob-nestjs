import { Controller, Get, Param } from '@nestjs/common';
import { TodosService } from 'src/todos/todos.service';

@Controller('todos/details')
export class DetailsController {
    constructor(private readonly todosService: TodosService){}
    @Get(':date')
    getSingleTodo(@Param('date') date){
        let found = this.todosService.findTodos().find(arr => arr.date == date)
        console.log(found);
        return found
    }
}
