import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { DetailsController } from './details/details.controller';

@Module({
  imports: [],
  controllers: [AppController, TodosController, DetailsController],
  providers: [AppService, TodosService],
})
export class AppModule {}
