import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { LoginModule } from './login/login.module';
import { DetailsModule } from './todos/details/details.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo-list'),
    TodosModule,
    LoginModule,
    DetailsModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
