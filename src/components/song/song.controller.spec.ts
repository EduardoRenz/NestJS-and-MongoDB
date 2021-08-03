import { Test, TestingModule } from '@nestjs/testing'
import { SongController } from './song.controller'
import { SongService } from './song.service'
import * as songs from '../../../data/songs.json'

jest.mock('./song.service')

describe(`SongController`, () => {
  let songController: SongController
  let songService: SongService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SongController],
      providers: [SongService],
    }).compile()
    songController = app.get<SongController>(SongController)
    jest.clearAllMocks()
  })

  describe('Songs', () => {
    it('should return all of the songs and must match with the interface', async () => {
      const response = await songController.getSongs(null)
      expect(response).toEqual(songs)
    })

    it('should return "A DreamShade Song"', async () => {
      const response = await songController.getSong({ id: 1 })
      expect(response).toStrictEqual({
        id: 1,
        title: 'Your Voice',
        artist: 'Dreamshade',
      })
    })

    it('should return all the Iron Maiden songs searching by query', async () => {
      const response = await songController.getSongs({ artist: 'Iron Maiden' })
      expect(
        response.every((song) => song.artist === 'Iron Maiden'),
      ).toBeTruthy()
    })
  })
})
