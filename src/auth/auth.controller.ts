import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthGuard } from './utils/Guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return 'this  is login';
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return 'this is redirect route';
  }
}
