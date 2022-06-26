import { IsNumber } from 'class-validator';

export class DivisionDto {
  @IsNumber({})
  first: number;

  @IsNumber({})
  second: number;
}
