import { IsNumber } from 'class-validator';

export class MultiplicationDto {
  @IsNumber({})
  first: number;

  @IsNumber({})
  second: number;
}
