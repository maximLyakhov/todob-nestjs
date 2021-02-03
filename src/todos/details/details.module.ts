import { Module } from '@nestjs/common';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';
import { Todo, TodoSchema } from '../dto/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema,
      },
    ]),
  ],
  controllers: [DetailsController],
  providers: [DetailsService],
  exports: [DetailsService],
})
export class DetailsModule {}
