import { AnimatedSprite, Sprite } from 'view/components/domain'

import { AvailableGameSprite } from '../../getGameSprites'

export interface DrawSprites {
  sprites: Record<AvailableGameSprite, AnimatedSprite | Sprite>
}
