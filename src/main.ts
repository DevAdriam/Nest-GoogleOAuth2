import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const PORT = process.env.PORT;
  console.log({
    id: process.env.CLIENT_ID,
    key: process.env.CLIENT_SECRET,
    cbUrl: process.env.CALLBACK_URL,
    scope: [process.env.SCOPE_1, process.env.SCOPE_2],
  });
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  console.log(process.env.CLIENT_ID);
}
bootstrap();
