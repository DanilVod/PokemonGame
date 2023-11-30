import { AnimatedSprite, Sprite } from 'view/components/domain'

import {
  BATTLE_BACKGROUND_IMAGE,
  BULBASAUR_FRONT,
} from './getBattleSprites.image'
import { GetBattleSprites } from './getBattleSprites.types'

export const getBattleSprites = ({ ctx, offset, canvas }: GetBattleSprites) => {
  const battleBackground = new Sprite({
    image: BATTLE_BACKGROUND_IMAGE,
    ctx,
  })

  const bulbasaurFront = new AnimatedSprite({
    position: {
      x: 800,
      y: 100,
    },
    image: BULBASAUR_FRONT,
    frames: { framesCount: 51 },
    ctx,
    animationSpeed: 5,
  })

  return {
    battleBackground,
    bulbasaurFront,
  }
}
