import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type SongDocument = Song & Document

@Schema()
export class Song {
  @Prop()
  title: string

  @Prop()
  artist: string
}

export const SongSchema = SchemaFactory.createForClass(Song)
