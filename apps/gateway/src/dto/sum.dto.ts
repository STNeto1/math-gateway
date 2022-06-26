import { IsNotEmpty, IsNumber } from 'class-validator';

export class SumDto {
  @IsNumber(
    {},
    {
      each: true,
    },
  )
  @IsNotEmpty()
  numbers: Array<number>;
}
