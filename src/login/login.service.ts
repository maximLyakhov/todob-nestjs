import { Injectable } from '@nestjs/common';
import { Login } from './dto/login.dto';

@Injectable()
export class LoginService {
  logins: Login[] = [
    {
      email: 'kek@kok.com',
      password: '1',
    },
  ];
}
