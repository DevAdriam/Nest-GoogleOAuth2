import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  handleLogin() {
    return 'this  is login';
  }

  @Get('google/redirect')
  handleRedirect() {
    return 'this is redirect route';
  }
}
