import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SongModule } from './components/song/song.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [SongModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
