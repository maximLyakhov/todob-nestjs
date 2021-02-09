require('dotenv').config();
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-strategy';
import { ExtractJwt } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/dto/registration.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'Token') {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      sercretOrKey: process.env.SECRET,
    });
  }
  async validate(payload: any) {
    const { username } = payload;
    const user = this.userModel.find({ $where: username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
