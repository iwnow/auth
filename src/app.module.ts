import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { LoggerModule } from './logger';

@Module({
  imports: [LoggerModule],
  controllers: [TestController],
  components: [],
})
export class ApplicationModule {}