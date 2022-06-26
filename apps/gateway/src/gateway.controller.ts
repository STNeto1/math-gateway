import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';
import { ResultOutput } from './dto/result.output';
import { SumDto } from './dto/sum.dto';

@Controller()
export class GatewayController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Post('sum')
  async math(@Body() data: SumDto): Promise<ResultOutput<number>> {
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
}
