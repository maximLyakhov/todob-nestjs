import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationDto } from './dto/registration.dto';
import { User } from 'src/registration/dto/registration.schema';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  create(registrationDto: RegistrationDto) {
    const reg = new this.userModel(registrationDto);
    return reg.save();
  }
}
