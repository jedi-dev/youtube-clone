export interface ContentDetailsInterface {
  caption: string
  contentRating: Object
  definition: string
  dimension: string
  duration: string
  licensedContent: boolean
  projection: string
  regionRestriction: RegionRestriction
}

export interface RegionRestriction {
  blocked: Array<string>
}
