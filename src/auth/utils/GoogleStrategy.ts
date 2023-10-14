import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
@Injectable()
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

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log({
      accessToken,
      refreshToken,
      profile,
    });
  }
}
