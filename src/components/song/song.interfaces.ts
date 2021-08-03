// Structure of a song
export interface ISong {
  id?: string
  title: string
  artist: string
}

// Query Params for a song quety
export interface ISongQueryParams {
  artist: string
}

export interface ISongService {
  getSong(id: string): Promise<ISong>
  getSongs(queryParams: ISongQueryParams): Promise<ISong[]>
  create(song: ISong): Promise<ISong>
}
