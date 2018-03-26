import { Module } from '@nestjs/common';
import { SignController } from './controllers';

@Module({
	components: [],
	controllers: [SignController],
})
export class AuthModule {}