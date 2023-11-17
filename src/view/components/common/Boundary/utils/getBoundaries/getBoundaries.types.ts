import { Position } from 'view/components'

export interface GetBoundaries {
  collisionMap: number[]
  offset: Position
  ctx: CanvasRenderingContext2D
}
