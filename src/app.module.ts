import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    LoginModule,
    LoginModule,
    MongooseModule.forRoot('mongodb://localhost:27017/todo-list'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
