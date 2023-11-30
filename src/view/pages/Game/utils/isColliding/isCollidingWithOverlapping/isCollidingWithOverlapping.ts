import { rectangleCollision } from '../isColliding.utils'
import { IsCollidingWithOverlapping } from './isCollidingWithOverlapping.types'

export const isCollidingWithOverlapping = ({
  object,
  boundaries,
}: IsCollidingWithOverlapping) => {
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i]

    const overlappingArea =
      (Math.min(
        object.position.x + object.width,
        boundary.position.x + boundary.width,
      ) -
        Math.max(object.position.x, boundary.position.x)) *
      (Math.min(
        object.position.y + object.height,
        boundary.position.y + boundary.height,
      ) -
        Math.max(object.position.y, boundary.position.y))
    if (
      rectangleCollision({
        rectangle1: object,
        rectangle2: boundary,
      }) &&
      overlappingArea > (object.width * object.height) / 2 &&
      Math.random() < 0.1
    ) {
      return true
    }
  }
  return false
}
