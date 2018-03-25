import { Component } from '@nestjs/common';

export enum LogLevel {
	fatal = 'Fatal',
	error = 'Error',
	warn = 'Warn',
	info = 'Info',
	debug = 'Debug',
	trace = 'Trace',
}

@Component()
export class LoggerService {
	readonly type = LogLevel;

	log(level: LogLevel, data) {
		// tslint:disable-next-line:no-console
		console.log(level, data);
	}
}