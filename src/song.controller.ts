import { Controller, Get } from '@nestjs/common';
import { SongService } from './song.service';

@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('song')
  getSong(): any {
    return this.songService.getSong();
  }
}
