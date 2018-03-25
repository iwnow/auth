import express = require('express');
import { ExceptionFilter, Catch, Component } from '@nestjs/common';

import { LoggerService } from './logger.service';
import { HttpException } from '@nestjs/common';

@Catch()
export class LoggerExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, response: express.Response) {
		this.logger.log(this.logger.type.fatal, exception);
		const statusCode = 500;
		response.status(statusCode).json({
			statusCode,
			message: 'Internal server error',
		});
	}

	constructor(protected logger: LoggerService) {}
}