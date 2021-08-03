import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { ISong, ISongQueryParams, ISongService } from './song.interfaces'
import { Song, SongDocument } from './song.schema'

@Injectable()
export class SongService implements ISongService {
  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) {}

  async create(song: ISong): Promise<ISong> {
    const createSong = new this.songModel(song)
    await createSong.save()
    return createSong
  }

  async getSongs(query: ISongQueryParams): Promise<SongDocument[]> {
    if (query == null || Object.keys(query).length === 0) {
      return this.songModel.find().exec()
    }

    // generate a case insensitive regex for mongodb find
    const regexQuery = query
    for (const key of Object.keys(query)) {
      regexQuery[key] = new RegExp(`${regexQuery[key]}`, 'i')
    }

    return this.songModel.find(regexQuery).exec()
  }

  getSong(id: string): Promise<SongDocument> {
    return this.songModel.findById(id).exec()
  }
}
