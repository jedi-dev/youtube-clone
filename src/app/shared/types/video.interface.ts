import {SnippetInterface} from './snippet.interface';
import {StatisticsInterface} from './statistics.interface';
import {ContentDetailsInterface} from './content-details.interface';

export interface VideoInterface {
  contentDetails: ContentDetailsInterface
  etag: string
  id: string
  kind: string
  snippet: SnippetInterface
  statistics: StatisticsInterface
}
