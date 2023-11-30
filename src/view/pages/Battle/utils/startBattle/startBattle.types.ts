import { AnimatedSprite, Sprite } from 'view/components/domain'

import { AvailableBattleSprite } from '../getBattleSprites'

export interface StartBattle {
  sprites: Record<AvailableBattleSprite, AnimatedSprite | Sprite>
}
