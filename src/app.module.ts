import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { DetailsModule } from './todos/details/details.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo-list'),
    TodosModule,
    DetailsModule,
    RegistrationModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
