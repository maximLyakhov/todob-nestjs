import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationDto } from 'src/auth/dto/registration.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registration')
  register(@Body() credentials: RegistrationDto) {
    return this.authService.register(credentials);
  }

  @Post('/login')
  finduser(@Body() credentials) {
    return this.authService.login(credentials);
  }
}
