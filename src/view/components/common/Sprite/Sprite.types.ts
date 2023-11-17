import { Position } from '../_domain'

export interface SpriteProps {
  ctx: CanvasRenderingContext2D
  image: HTMLImageElement
  position?: Position
  velocity?: number
  frames?: Frames
}

export interface Frames {
  max: number
}
