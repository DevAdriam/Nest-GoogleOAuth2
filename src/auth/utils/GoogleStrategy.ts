import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    //set up OAuth client props
    super({
      clientID: process.env.CLIENT_ID,
      clientSECRET: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: [process.env.SCOPE_1, process.env.SCOPE_2],
    });
  }
}
