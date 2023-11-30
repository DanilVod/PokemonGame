import { DirectionKeyboard } from 'view/components'

import { activateBattle } from '../../../../Battle/utils/activateBattle'
import { isColliding, isCollidingWithOverlapping } from '../../isColliding'
import { Directions, MovePlayer } from '../startGame.types'
import { StartPlayerLifeCycle } from './startPlayerLifeCycle.types'

const movePlayer = ({ direction, distance, movables }: MovePlayer) => {
  movables.forEach(movable => {
    movable.position[direction] += distance
  })
}

export const startPlayerLifeCycle = ({
  player,
  boundaries,
  battleZones,
  keys,
  movables,
  gameState,
  canvasInfo,
}: StartPlayerLifeCycle) => {
  const isCollidingBoundary = isColliding({
    object: player,
    boundaries,
  })

  const isCollidingBattleZones = isCollidingWithOverlapping({
    object: player,
    boundaries: battleZones,
  })

  const directions: Directions = {
    w: { direction: 'y', distance: 3 },
    a: { direction: 'x', distance: 3 },
    s: { direction: 'y', distance: -3 },
    d: { direction: 'x', distance: -3 },
  }

  player.isMoving = false

  Object.entries(directions).forEach(([key, { direction, distance }]) => {
    if (
      (keys[key as keyof typeof keys] as { pressed: boolean })?.pressed &&
      keys.lastKey === key
    ) {
      const isMovingDirection = isCollidingBoundary(direction, distance)

      if (
        keys.w.pressed ||
        keys.a.pressed ||
        keys.s.pressed ||
        keys.d.pressed
      ) {
        if (isCollidingBattleZones) {
          activateBattle({ gameState, canvasInfo })
        }
      }

      player.isMoving = isMovingDirection

      if (player?.directionSprites) {
        player.image =
          player.directionSprites[
            DirectionKeyboard[key as keyof typeof DirectionKeyboard]
          ]
      }

      if (isMovingDirection) {
        movePlayer({ direction, distance, movables })
      }
    }
  })
  return <></>
}
