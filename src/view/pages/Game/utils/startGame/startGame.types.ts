import { Boundary } from 'view/components'
import { AnimatedSprite, Sprite } from 'view/components/domain'
import {
  AvailableGameSprite,
  KeyboardNavigationKeys,
  SetKeyboardNavigationKeys,
} from 'view/pages/Game/utils'

import { CanvasInfo } from '../../Game.types'

export type Direction = 'x' | 'y'

export interface MovePlayer {
  direction: Direction
  distance: number
  movables: (Boundary | Sprite)[]
}

export type Directions = Record<
  keyof typeof KeyboardNavigationKeys,
  { direction: Direction; distance: number }
>

export interface GameState {
  isGameStarted: boolean
  animationFrameId: number
}

export interface StartGame {
  sprites: Record<AvailableGameSprite, AnimatedSprite | Sprite>
  boundaries: Boundary[]
  battleZones: Boundary[]
  keys: SetKeyboardNavigationKeys
  canvasInfo: CanvasInfo
}
