import { Test, TestingModule } from '@nestjs/testing'
import { SongController } from './song.controller'
import { SongService } from './song.service'
import * as songs from '../../../data/songs.json'

describe(`SongController`, () => {
  let songController: SongController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SongController],
      providers: [SongService],
    }).compile()
    songController = app.get<SongController>(SongController)
  })

  describe('Songs', () => {
    it('should return all of the songs and must match with the interface', () => {
      const response = songController.getSongs(null)
      expect(response).toEqual(songs)
    })

    it('should return "A DreamShade Song"', () => {
      expect(songController.getSong({ id: 1 })).toStrictEqual({
        id: 1,
        title: 'Your Voice',
        artist: 'Dreamshade',
      })
    })

    it('should return all the Iron Maiden songs searching by query', () => {
      const response = songController.getSongs({ artist: 'Iron Maiden' })
      expect(
        response.every((song) => song.artist === 'Iron Maiden'),
      ).toBeTruthy()
    })
  })
})
