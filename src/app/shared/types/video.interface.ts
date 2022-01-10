import {SnippetInterface} from './snippet.interface';
import {ResourceIdInterface} from './resource-id.interface';

export interface VideoInterface {
  kind: string
  etag: string
  id: string
  snippet: SnippetInterface
  channelTitle: string
  playlistId: string
  position: number
  resourceId: ResourceIdInterface
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
}
