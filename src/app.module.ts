import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SongController } from './song.controller'
import { SongService } from './song.service'
@Module({
  imports: [],
  controllers: [AppController, SongController],
  providers: [AppService, SongService],
})
export class AppModule {}
