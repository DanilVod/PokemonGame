import { Boundary } from 'view/components'

import { GetBoundaries } from './getBoundaries.types'

export const getBoundaries = ({ offset, collisionMap, ctx }: GetBoundaries) => {
  const collisionsMap = []

  for (let i = 0; i < collisionMap.length; i += 70) {
    collisionsMap.push(collisionMap.slice(i, 70 + i))
  }

  const boundaries: Boundary[] = []

  collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
      if (symbol === 1025) {
        boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width + offset.x,
              y: i * Boundary.height + offset.y,
            },
            ctx,
          }),
        )
      }
    })
  })

  return boundaries
}
