import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';
import { DivisionDto } from './dto/division.dto';
import { MultiplicationDto } from './dto/multiplication.dto';
import { ResultOutput } from './dto/result.output';
import { SubstractionDto } from './dto/subtraction.dto';
import { SumDto } from './dto/sum.dto';

@Controller()
export class GatewayController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Post('sum')
  async sum(@Body() data: SumDto): Promise<ResultOutput<number>> {
    const pattern = { cmd: 'sum' };

    const observable = this.client
      .send<number>(pattern, data.numbers)
      .pipe(timeout(500));
    const result = await lastValueFrom(observable);

    return {
      success: true,
      result,
    };
  }

  @Post('subtraction')
  async subtraction(
    @Body() data: SubstractionDto,
  ): Promise<ResultOutput<number>> {
    const pattern = { cmd: 'subtraction' };

    const observable = this.client
      .send<number>(pattern, data.numbers)
      .pipe(timeout(500));
    const result = await lastValueFrom(observable);

    return {
      success: true,
      result,
    };
  }

  @Post('multiplication')
  async multiplication(
    @Body() data: MultiplicationDto,
  ): Promise<ResultOutput<number>> {
    const pattern = { cmd: 'multiplication' };

    const observable = this.client
      .send<number>(pattern, [data.first, data.second])
      .pipe(timeout(500));
    const result = await lastValueFrom(observable);

    return {
      success: true,
      result,
    };
  }

  @Post('division')
  async division(@Body() data: DivisionDto): Promise<ResultOutput<number>> {
    const pattern = { cmd: 'division' };

    const observable = this.client
      .send<number>(pattern, [data.first, data.second])
      .pipe(timeout(500));
    const result = await lastValueFrom(observable);

    return {
      success: true,
      result,
    };
  }
}
