import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/auth/dto/registration.schema';

@Schema()
export class Todo extends User {
  @Prop()
  userid: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  date: number;

  @Prop()
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
