import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { MATH_SERVICE } from './contract';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/gateway/.env',
    }),
  ],
  controllers: [GatewayController],
  providers: [
    GatewayService,
    {
      provide: MATH_SERVICE,
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('MATH_SERVICE_HOST'),
            port: configService.get('MATH_SERVICE_PORT'),
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class GatewayModule {}
