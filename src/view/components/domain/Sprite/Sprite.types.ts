import { Position } from '../types'

export interface SpriteProps {
  ctx: CanvasRenderingContext2D
  image: HTMLImageElement
  position?: Position
  velocity?: number
}
