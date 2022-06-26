import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ResultOutput } from './dto/result.output';
import { SumDto } from './dto/sum.dto';

@Controller()
export class GatewayController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Post('sum')
  async math(@Body() data: SumDto): Promise<ResultOutput<number>> {
    const pattern = { cmd: 'sum' };

    const result = await lastValueFrom(
      this.client.send<number>(pattern, data.numbers),
    );

    return {
      success: true,
      result,
    };
  }
}
