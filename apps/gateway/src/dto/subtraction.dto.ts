import { IsNotEmpty, IsNumber } from 'class-validator';

export class SubstractionDto {
  @IsNumber(
    {},
    {
      each: true,
    },
  )
  @IsNotEmpty()
  numbers: Array<number>;
}
