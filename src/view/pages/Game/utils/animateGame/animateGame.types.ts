import { Boundary, Sprite } from 'view/components'
import {
  KeyboardNavigationKeys,
  SetKeyboardNavigationKeys,
} from 'view/pages/Game/utils'

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

export interface AnimateGame {
  background: Sprite
  boundaries: Boundary[]
  player: Sprite
  keys: SetKeyboardNavigationKeys
}
