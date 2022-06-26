import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern({ cmd: 'sum' })
  async sum(data: number[] = []): Promise<number> {
    return this.mathService.sum(data);
  }

  @MessagePattern({ cmd: 'subtraction' })
  async subtraction(data: number[] = []): Promise<number> {
    return this.mathService.subtraction(data);
  }

  @MessagePattern({ cmd: 'multiplication' })
  async multiplication(data: [number, number]): Promise<number> {
    return this.mathService.multiplication(data);
  }

  @MessagePattern({ cmd: 'division' })
  async division(data: [number, number]): Promise<number> {
    return this.mathService.division(data);
  }
}
