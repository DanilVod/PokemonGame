import { PlayerSprite } from 'view/components'
import { Sprite } from 'view/components/domain'

import {
  MAP_FOREGROUND_IMAGE,
  MAP_IMAGE,
  PLAYER_IMAGE_DOWN,
  PLAYER_IMAGE_LEFT,
  PLAYER_IMAGE_RIGHT,
  PLAYER_IMAGE_UP,
} from './getGameSprites.image'
import { GetGameSprites } from './getGameSprites.types'

export const getGameSprites = ({ ctx, offset, canvas }: GetGameSprites) => {
  const player = new PlayerSprite({
    position: {
      x: canvas.width / 2 - PLAYER_IMAGE_DOWN.width / 4 / 2,
      y: canvas.height / 2 - PLAYER_IMAGE_DOWN.height / 2,
    },
    frames: { framesCount: 4 },
    image: PLAYER_IMAGE_DOWN,
    ctx,
    directionSprites: {
      up: PLAYER_IMAGE_UP,
      down: PLAYER_IMAGE_DOWN,
      left: PLAYER_IMAGE_LEFT,
      right: PLAYER_IMAGE_RIGHT,
    },
  })

  const background = new Sprite({
    position: { ...offset },
    image: MAP_IMAGE,
    ctx,
  })

  const backgroundForeground = new Sprite({
    position: { ...offset },
    image: MAP_FOREGROUND_IMAGE,
    ctx,
  })

  return {
    background,
    player,
    backgroundForeground,
  }
}
