import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DetailsService } from './details.service';

@Controller('todos/details')
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  @Get(':date')
  getSingleTodo(@Param('date') date: number) {
    return this.detailsService.findOne(date);
  }

  @Delete(':date')
  deleteTodo(@Param('date') date: number) {
    return this.detailsService.remove(date);
  }
}
