import {ThumbnailsInterface} from './thumbnails.interface';

export interface SnippetInterface {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: ThumbnailsInterface
}
