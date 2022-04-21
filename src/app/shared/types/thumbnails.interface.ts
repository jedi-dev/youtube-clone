export interface ThumbnailsInterface {
  default: Default
  medium: Medium
  high: High
  standard: Standard
  maxres: Maxres
}

interface Default {
  url: string
  width: number
  height: number
}
interface Medium {
  url: string
  width: number
  height: number
}
interface High {
  url: string
  width: number
  height: number
}
interface Standard {
  url: string
  width: number
  height: number
}
interface Maxres {
  url: string
  width: number
  height: number
}
