import { SpriteProps } from '..'

export interface Frames {
  framesCount: number
  currentFrame: number
  elapsed: number
}

export interface AnimatedSpriteProps extends SpriteProps {
  frames?: Pick<Frames, 'framesCount'>
  animationSpeed?: number
}
