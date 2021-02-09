import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Yooser } from 'src/auth/dto/user.dto';
import { RegistrationDto } from 'src/auth/dto/registration.dto';
import { User } from 'src/auth/dto/registration.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  currentUser;
  currentToken;

  async register(credentials: RegistrationDto) {
    try {
      const user = await this.userModel
        .findOne({ email: credentials.email })
        .exec();
      if (user === null) {
        const payload = { email: credentials.email };
        const token = this.jwtService.sign(payload);
        this.userModel.create(credentials);
        this.currentToken = token;
        return { user: { ...credentials, token } };
      } else {
        throw new ConflictException('This email has already been taken');
      }
    } catch (err) {
      throw new InternalServerErrorException(
        'This email has already been taken',
      );
    }
  }

  async login(yooser: Yooser) {
    try {
      const user = await this.userModel.findOne({ email: yooser.email }).exec();
      if (user.password == yooser.password) {
        const payload = { email: user.email };
        const token = this.jwtService.sign(payload);
        this.currentToken = token;
        return { user: { ...user.toJSON(), token } };
      } else {
        throw new UnauthorizedException('Invalid password');
      }
    } catch (err) {
      throw new UnauthorizedException(
        'You have just mistyped your credentials, or have not registered yet!',
      );
    }
  }
}
