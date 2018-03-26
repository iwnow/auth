import { Controller, Get, Post, Body } from '@nestjs/common';
import { SignUpDto } from '../dto';

@Controller('api/sign')
export class SignController {

	@Post('up')
	signUp(@Body() signUpDto: SignUpDto) {
		return signUpDto;
	}
}