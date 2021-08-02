import { Injectable } from '@nestjs/common'
import * as songs from '../../../data/songs.json'
import { ISong } from './song.module'

@Injectable()
export class SongService {
  getSongs(): ISong[] {
    return songs
  }
  getSong(id: number): ISong {
    console.log(songs)
    return songs.find((song) => song.id == id)
  }
}
