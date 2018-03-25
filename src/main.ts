import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {LoggerModule, LoggerExceptionFilter} from './logger';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  const loggerFilter = app
    .select(LoggerModule)
    .get(LoggerExceptionFilter);

  app.useGlobalFilters(loggerFilter);
  await app.listen(3000);
}
bootstrap();