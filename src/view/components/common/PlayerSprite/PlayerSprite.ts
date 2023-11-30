import { AnimatedSprite } from 'view/components/domain'

import { PlayerProps } from './PlayerSprite.types'

export class PlayerSprite extends AnimatedSprite {
  isMoving: boolean
  directionSprites?: PlayerProps['directionSprites']

  constructor({
    position = { x: 0, y: 0 },
    isMoving = false,
    image,
    frames = { framesCount: 1 },
    ctx,
    directionSprites,
  }: PlayerProps) {
    super({ position, image, ctx, frames })

    this.directionSprites = directionSprites
    this.isMoving = isMoving
  }

  draw() {
    super.draw()
  }

  animate() {
    if (this.isMoving) {
      super.animate()
    } else {
      this.frames.currentFrame = 0
    }
  }
}
