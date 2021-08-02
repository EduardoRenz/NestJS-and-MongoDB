import { Controller, Get, Param } from '@nestjs/common'
import { SongService } from './song.service'
import { ISong } from './song.module'

@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('songs')
  getSongs(): ISong[] {
    return this.songService.getSongs()
  }

  @Get('songs/:id')
  getSong(@Param() params): ISong {
    const song = this.songService.getSong(params.id)
    return song
  }
}
