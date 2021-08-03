import { ISong, ISongQueryParams, ISongService } from '../song.interfaces'
import * as songs from '../../../../data/songs.json'
export class SongService implements ISongService {
  async create(song: ISong): Promise<ISong> {
    return null
  }
  async getSong(id: string): Promise<any> {
    return songs.find((song) => String(song.id) == String(id))
  }
  getSongs(query: ISongQueryParams): any {
    if (query == null || Object.keys(query).length == 0) {
      return songs
    }
    // filter all songs that query values match with song fields
    return songs.filter((song) => {
      const keys = Object.keys(query)
      return keys.every((key) => {
        return song[key] == query[key]
      })
    })
  }
}
