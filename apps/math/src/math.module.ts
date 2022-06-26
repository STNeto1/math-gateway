import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MathController } from './math.controller';
import { MathService } from './math.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/math/.env',
    }),
  ],
  controllers: [MathController],
  providers: [MathService],
})
export class MathModule {}
