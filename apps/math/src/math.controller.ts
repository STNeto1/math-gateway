import { Controller, Get } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Get()
  getHello(): string {
    return this.mathService.getHello();
  }
}
