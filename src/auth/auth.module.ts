import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { SignController } from './controllers';
import { HelmetMiddleware } from '@nest-middlewares/helmet';

@Module({
	components: [],
	controllers: [SignController],
})
export class AuthModule implements NestModule {
	configure(consumer: MiddlewaresConsumer) {
		HelmetMiddleware.configure({});
		return consumer.apply(HelmetMiddleware)
			.forRoutes(SignController);
	}
}