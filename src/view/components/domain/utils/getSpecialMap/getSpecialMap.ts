import { Boundary } from 'view/components'

import { GetSpecialMap } from './getSpecialMap.types'

export const getSpecialMap = <T>({
  offset,
  specialMap,
  ctx,
  classConstructor,
}: GetSpecialMap<T>) => {
  const resultMap = []

  for (let i = 0; i < specialMap.length; i += 70) {
    resultMap.push(specialMap.slice(i, 70 + i))
  }

  const boundaries: T[] = []

  resultMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
      if (symbol === 1025) {
        boundaries.push(
          new classConstructor({
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
