import { Boundary, PlayerSprite } from 'view/components'
import { Sprite } from 'view/components/domain'
import { CanvasInfo } from 'view/pages/Game/Game.types'

import { SetKeyboardNavigationKeys } from '../../setKeyboardNavigation'
import { GameState } from '../startGame.types'

export interface StartPlayerLifeCycle {
  player: PlayerSprite
  boundaries: Boundary[]
  battleZones: Boundary[]
  keys: SetKeyboardNavigationKeys
  movables: (Boundary | Sprite)[]
  gameState: GameState
  canvasInfo: CanvasInfo
}
