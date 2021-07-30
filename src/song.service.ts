import { Injectable } from '@nestjs/common'

@Injectable()
export class SongService {
  getSong(): any {
    return { name: 'Your Voice', author: 'Dreamshade' }
  }
}
