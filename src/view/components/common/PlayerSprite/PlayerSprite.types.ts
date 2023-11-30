import { AnimatedSpriteProps } from 'view/components/domain'

export enum DirectionKeyboard {
  w = 'up',
  s = 'down',
  a = 'left',
  d = 'right',
}

export type DirectionSprites = Record<
  (typeof DirectionKeyboard)[keyof typeof DirectionKeyboard],
  HTMLImageElement
>

export interface PlayerProps extends AnimatedSpriteProps {
  isMoving?: boolean
  directionSprites?: DirectionSprites
}
