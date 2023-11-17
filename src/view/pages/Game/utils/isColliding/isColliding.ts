import { Position, Rectangle } from 'view/components'

import { IsColliding } from './isColliding.types'

const rectangleCollision = ({
  rectangle1,
  rectangle2,
}: {
  rectangle1: Rectangle
  rectangle2: Rectangle
}) => {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  )
}

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
