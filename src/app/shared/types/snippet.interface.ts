import {ThumbnailsInterface} from './thumbnails.interface';

export interface SnippetInterface {
  categoryId: string
  channelId: string
  channelTitle: string
  defaultAudioLanguage: string
  description: string
  liveBroadcastContent: string
  localized: LocalizedInterface
  tags: Array<string>
  publishedAt: Date
  thumbnails: ThumbnailsInterface
  title: string
}

interface LocalizedInterface {
  title: string
  description: string
}
