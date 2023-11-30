import { DrawSprites } from './drawSprites.types'

export const drawSprites = ({ sprites }: DrawSprites) => {
  Object.values(sprites).forEach((sprite, index) => {
    sprite.draw()

    if ('animate' in sprite) {
      sprite.animate()
    }
  })
}
