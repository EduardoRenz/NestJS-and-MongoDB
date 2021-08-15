import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { ClientProxy } from '@nestjs/microservices'

@Controller()
export class AppController {
  constructor(
    @Inject('RabbitMQService') private readonly client: ClientProxy,
    private readonly appService: AppService,
  ) {}

  async onApplicationBoostrat() {
    await this.client.connect()
  }

  @Get()
  getHello(): string {
    this.client.emit('hello_sent', 'world')
    return this.appService.getHello()
  }
}
