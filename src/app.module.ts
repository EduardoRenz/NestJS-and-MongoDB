import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SongModule } from './components/song/song.module'
import { MongooseModule } from '@nestjs/mongoose'
import { Transport, ClientsModule } from '@nestjs/microservices'

@Module({
  imports: [
    SongModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ClientsModule.register([
      {
        name: 'RabbitMQService',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'nestjs-messages',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
