import { Module } from '@nestjs/common'
import { SongController } from './song.controller'
import { SongService } from './song.service'

export interface ISong {
  id: number
  title: string
  artist: string
}

@Module({
  imports: [],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
