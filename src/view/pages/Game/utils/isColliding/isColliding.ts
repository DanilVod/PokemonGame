import { Position } from 'view/components/domain'

import { IsColliding } from './isColliding.types'
import { rectangleCollision } from './isColliding.utils'

export const isColliding = ({ object, boundaries }: IsColliding) => {
  return (position: keyof Position, increment: number): boolean => {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]

      const updatedBoundary = {
        ...boundary,
        position: {
          ...boundary.position,
          [position]: boundary.position[position] + increment,
        },
      }

      if (
        rectangleCollision({
          rectangle1: object,
          rectangle2: updatedBoundary,
        })
      ) {
        return false
      }
    }
    return true
  }
}
