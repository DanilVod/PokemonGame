import { isColliding } from 'view/pages/Game/utils/isColliding'

import { AnimateGame, Directions, MovePlayer } from './animateGame.types'

const movePlayer = ({ direction, distance, movables }: MovePlayer) => {
  movables.forEach(movable => {
    movable.position[direction] += distance
  })
}

export const animateGame = ({
  background,
  boundaries,
  player,
  keys,
}: AnimateGame) => {
  const animate: FrameRequestCallback = (time: number) => {
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary => {
      boundary.draw()
    })
    player.draw()

    const isMoving = isColliding({
      object: player,
      boundaries,
    })

    const movables = [background, ...boundaries]

    const directions: Directions = {
      w: { direction: 'y', distance: 3 },
      a: { direction: 'x', distance: 3 },
      s: { direction: 'y', distance: -3 },
      d: { direction: 'x', distance: -3 },
    }

    Object.entries(directions).forEach(([key, { direction, distance }]) => {
      if (
        (keys[key as keyof typeof keys] as { pressed: boolean })?.pressed &&
        keys.lastKey === key
      ) {
        const isMovingDirection = isMoving(direction, distance)

        if (isMovingDirection) {
          movePlayer({ direction, distance, movables })
        }
      }
    })
  }
  animate(0)
}
