import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const port = process.env.PORT ?? 3000; // Используем порт из переменной окружения или 3000 по умолчанию
  await app.listen(port);
}
bootstrap();
