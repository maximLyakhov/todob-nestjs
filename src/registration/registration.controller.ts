import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from './dto/registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async create(@Body() registrationDto: RegistrationDto) {
    const success = this.registrationService.create(registrationDto);
    if (await success) {
      return success;
    } else return new ForbiddenException('This email is already taken');
  }
}
