import { Position } from '../_domain'
import { Frames, SpriteProps } from './Sprite.types'

export class Sprite {
  ctx: CanvasRenderingContext2D
  image: HTMLImageElement
  position: Position
  frames: Frames
  width: number = 0
  height: number = 0

  constructor({
    position = { x: 0, y: 0 },
    image,
    frames = { max: 1 },
    ctx,
  }: SpriteProps) {
    this.position = position
    this.image = image
    this.frames = frames
    this.ctx = ctx
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max
      this.height = this.image.height
    }
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height,
    )
  }
}
