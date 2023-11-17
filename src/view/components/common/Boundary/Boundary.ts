import { Position, Rectangle } from '../_domain'
import { BoundaryProps } from './Boundary.types'

export class Boundary implements Rectangle {
  ctx: CanvasRenderingContext2D
  position: Position
  width: number
  height: number
  static width = 48
  static height = 48

  constructor({ position, ctx }: BoundaryProps) {
    this.ctx = ctx
    this.position = position
    this.width = Boundary.width
    this.height = Boundary.height
  }

  draw() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      Boundary.width,
      Boundary.height,
    )
  }
}
