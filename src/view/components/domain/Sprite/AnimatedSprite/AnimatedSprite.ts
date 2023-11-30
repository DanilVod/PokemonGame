import { Sprite } from '../Sprite'
import { AnimatedSpriteProps, Frames } from './AnimatedSprite.types'

export class AnimatedSprite extends Sprite {
  animationSpeed: number
  frames: Frames

  constructor({
    position = { x: 0, y: 0 },
    image,
    frames = { framesCount: 1 },
    ctx,
    animationSpeed = 15,
  }: AnimatedSpriteProps) {
    super({ position, image, ctx })

    this.animationSpeed = animationSpeed
    this.frames = {
      ...frames,
      currentFrame: 1,
      elapsed: 0,
    }

    console.log(this.image)
    this.width = this.image.width / this.frames.framesCount
    this.height = this.image.height

    this.image.onload = () => {
      this.width = this.image.width / this.frames.framesCount
      this.height = this.image.height
    }
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.frames.currentFrame * this.width,
      0,
      this.image.width / this.frames.framesCount,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.framesCount,
      this.image.height,
    )
  }

  animate() {
    if (this.frames.framesCount > 1) {
      this.frames.elapsed++
    }

    if (this.frames.elapsed % this.animationSpeed === 0) {
      if (this.frames.currentFrame < this.frames.framesCount - 1) {
        this.frames.currentFrame++
      } else {
        this.frames.currentFrame = 0
      }
    }
  }
}
