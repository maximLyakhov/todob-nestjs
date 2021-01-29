import { Controller, Delete, Get, Post, Body } from '@nestjs/common';
import { TodoDbDto } from './dto/todo-db.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    
    constructor(private readonly todosService: TodosService){}

    @Get()
    getTodos(): TodoDbDto[] {
        console.log('db retrieved');
        return this.todosService.findTodos()
    }

    @Post()
    postTodo(@Body() data){
        const bakedTodo = {
            ...data,
            date: Date.now(),
            done: false
        }
        this.todosService.postTodo(bakedTodo)
    }

    @Delete()
    deleteTodo(date){
        console.log(date);
        this.todosService.deleteTodo(date)
    }
}
