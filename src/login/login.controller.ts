import { Body, Controller, Post } from '@nestjs/common';
import { Login } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  getLogin(@Body() data: Login) {
    let singleLogin = this.loginService.findUser(data);
    return singleLogin;
  }
}
