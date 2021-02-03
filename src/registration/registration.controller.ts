import { Controller, Post, Body, Get } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from './dto/registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  create(@Body() registrationDto: RegistrationDto) {
    const success = this.registrationService.create(registrationDto);
    return Boolean(success);
  }
}
