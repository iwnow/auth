import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { SignUpDto } from '../dto';
import {SignUpValidationPipe} from '../pipes';

@Controller('api/sign')
export class SignController {

	/** create new user */
	@Post('up')
	@UsePipes(new SignUpValidationPipe())
	signUp(@Body() signUpDto: SignUpDto) {
		return 'User created!';
	}
}