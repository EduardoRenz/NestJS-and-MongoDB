import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common'
import { SongService } from './song.service'
import { ISong, ISongQueryParams } from './song.interfaces'
import { Song, SongDocument } from './song.schema'
@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('songs')
  async getSongs(@Query() query: ISongQueryParams): Promise<SongDocument[]> {
    return this.songService.getSongs(query)
  }

  @Get('songs/:id')
  async getSong(@Param() params): Promise<ISong> {
    const song = this.songService.getSong(params.id)
    return song
  }

  @Post('songs')
  async create(@Body() song: ISong): Promise<ISong> {
    return this.songService.create(song)
  }
}
