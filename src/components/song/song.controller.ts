import { Controller, Get, Param, Query } from '@nestjs/common'
import { SongService } from './song.service'
import { ISong, ISongQueryParams } from './song.interfaces'

@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('songs')
  getSongs(@Query() query: ISongQueryParams): ISong[] {
    return this.songService.getSongs(query)
  }

  @Get('songs/:id')
  getSong(@Param() params): ISong {
    const song = this.songService.getSong(params.id)
    return song
  }
}
