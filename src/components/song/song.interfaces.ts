// Structure of a song
export interface ISong {
  id: number
  title: string
  artist: string
}

// Query Params for a song quety
export interface ISongQueryParams {
  artist: string
}
