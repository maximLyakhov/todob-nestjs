import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { RegistrationController } from 'src/registration/registration.controller';
import { RegistrationService } from 'src/registration/registration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/registration/dto/registration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [LoginService, RegistrationService],
  controllers: [LoginController, RegistrationController],
})
export class LoginModule {}
