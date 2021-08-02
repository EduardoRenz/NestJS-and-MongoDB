import { Injectable } from '@nestjs/common'
import * as songs from '../../../data/songs.json'
import { ISong, ISongQueryParams } from './song.interfaces'

@Injectable()
export class SongService {
  getSongs(query: ISongQueryParams): ISong[] {
    if (Object.keys(query).length === 0) {
      return songs
    }

    return songs.filter((song) => {
      return Object.keys(query).every((key) => {
        return song[key].toLowerCase() === query[key].toLowerCase()
      })
    })
  }

  getSong(id: number): ISong {
    console.log(songs)
    return songs.find((song) => song.id == id)
  }
}
