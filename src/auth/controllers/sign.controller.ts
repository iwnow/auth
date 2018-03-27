import { Controller, Get, Post, Body, UsePipes, HttpCode } from '@nestjs/common';
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

	/** signIn/login to app
	 * this method create and return new token
	 * if user or mobile device is exist/signUp
	 */
	@Post('in')
	signIn(@Body() signInDto) {
		return 'New Token';
	}

	/** forced invalidate token, exit from app */
	@Post('out')
	@HttpCode(200)
	signOut(@Body() signOutDto) {

	}
}