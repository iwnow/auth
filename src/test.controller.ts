import { Get, Controller, Param, Query, Headers, Post, Body } from '@nestjs/common';
import {plainToClass} from 'class-transformer';

class CreateTestDto {
  readonly name: string;
}

@Controller()
export class TestController {
	@Get()
	root(): string {
    return 'Hello World!';
	}

	@Get('except')
	testEx() {
		throw new Error('test error');
	}

	@Get('param/:id')
	param(@Param() params, @Query() query, @Headers() headers) {
		return {
			id: params.id,
			query,
			headers,
		};
	}

	@Post()
	create(@Body() createTestDto: CreateTestDto) {
		const cls = plainToClass(CreateTestDto, createTestDto);
		return {
			op: 'created test',
			type: cls && cls.constructor.name,
			data: createTestDto,
		};
	}
}