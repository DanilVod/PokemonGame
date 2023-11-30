import { Position } from 'view/components/domain'

export interface CanvasInfo {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  offset: Position
}

export interface GameSettings {
  width?: number
  height?: number
  offset?: Position
}
