import { Position } from '../types'
import { SpriteProps } from './Sprite.types'

export class Sprite {
  ctx: CanvasRenderingContext2D
  image: HTMLImageElement
  position: Position
  width: number = 0
  height: number = 0

  constructor({ position = { x: 0, y: 0 }, image, ctx }: SpriteProps) {
    this.position = position
    this.image = image
    this.ctx = ctx

    this.image.onload = () => {
      this.width = this.image.width
      this.height = this.image.height
    }
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width,
      this.image.height,
    )
  }
}
