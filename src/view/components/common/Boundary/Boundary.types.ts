import { Position } from 'view/components/common/_domain'

import { Boundary } from './Boundary'

export interface BoundaryProps {
  ctx: CanvasRenderingContext2D
  position: Position
}

export interface BoundaryConstructor {
  height: number
  width: number
  new (props: BoundaryProps): Boundary
}
