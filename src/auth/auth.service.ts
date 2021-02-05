import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login } from 'src/login/dto/login.dto';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: Login): Promise<any> {
    const user = await this.loginService.findUser(login);
    if (user && user.password === login.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Login) {
    const payload = { email: user.email, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
