import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerModule } from './logger';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}