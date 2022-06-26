import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern({ cmd: 'sum' })
  async getHello(data: number[] = []): Promise<number> {
    return this.mathService.sum(data);
  }
}
