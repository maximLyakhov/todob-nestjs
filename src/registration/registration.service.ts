import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationDto } from '../auth/dto/registration.dto';
import { User } from 'src/auth/dto/registration.schema';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(registrationDto: RegistrationDto) {
    const maybeExistingReg = this.userModel
      .findOne({ email: registrationDto.email })
      .exec();

    const reg = new this.userModel(registrationDto);
    try {
      if (registrationDto.email === (await maybeExistingReg).email) {
        return false;
      }
    } catch {
      return reg.save();
    }
  }
}
