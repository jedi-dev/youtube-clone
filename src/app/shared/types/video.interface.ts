import {ResourceIdInterface} from './resource-id.interface';
import {ThumbnailsInterface} from './thumbnails.interface';

export interface VideoInterface {
  channelId: string
  channelTitle: string
  description: string
  playlistId: string
  position: number
  publishedAt: Date
  resourceId: ResourceIdInterface
  thumbnails: ThumbnailsInterface
  title: string
  videoOwnerChannelId: string
  videoOwnerChannelTitle: string
}
