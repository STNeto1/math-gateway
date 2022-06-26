import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  sum(data: number[]): number {
    return data.reduce((a, b) => a + b);
  }

  subtraction(data: number[]): number {
    return data.reduce((a, b) => a - b);
  }

  multiplication(data: [number, number]): number {
    return data.at(0) * data.at(1);
  }

  division(data: [number, number]): number {
    return data.at(0) / data.at(1);
  }
}
