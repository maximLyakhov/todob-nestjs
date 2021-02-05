import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/registration/dto/registration.schema';
import { Login } from './dto/login.dto';

@Injectable()
export class LoginService {
  currentUser: Login;

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findUser(login: Login): Promise<User | undefined> {
    const user = await this.userModel.findOne({ email: login.email }).exec();
    if (!user || (await user) === null) {
      throw new NotFoundException(`User ${login.email} not found!`);
    } else if (user.password !== login.password) {
      throw new ForbiddenException('Pshol na hyi sobaka');
    }
    this.currentUser = user;
    return user;
  }
}
