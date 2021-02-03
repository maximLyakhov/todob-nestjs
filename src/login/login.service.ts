import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/registration/dto/registration.schema';
import { Login } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findUser(login: Login) {
    const existingLogin = this.userModel
      .findOne({ email: login.email }, { password: login.password })
      .exec();
    if (!existingLogin) {
      throw new NotFoundException(`User ${login.email} not found!`);
    }
    return existingLogin;
  }
}
