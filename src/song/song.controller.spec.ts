import { Test, TestingModule } from '@nestjs/testing'
import { SongController } from './song.controller'
import { SongService } from './song.service'

describe(`SongController`, () => {
  let songCcontroller: SongController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SongController],
      providers: [SongService],
    }).compile()
    songCcontroller = app.get<SongController>(SongController)
  })

  describe('/song', () => {
    it('should return "A DreamShade Song"', () => {
      expect(songCcontroller.getSong()).toStrictEqual({
        name: 'Your Voice',
        author: 'Dreamshade',
      })
    })
  })
})
