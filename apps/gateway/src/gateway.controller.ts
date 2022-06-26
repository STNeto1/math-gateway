import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(
    @Inject('MATH_SERVICE') private client: ClientProxy,
    private readonly gatewayService: GatewayService,
  ) {}

  @Post()
  math(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    return this.client.send<number>(pattern, payload);
  }
}
