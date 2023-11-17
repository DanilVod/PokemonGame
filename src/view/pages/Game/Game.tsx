import { Sprite, getBoundaries, useCanvas } from 'view/components'
import { animateGame } from 'view/pages/Game/utils/animateGame'

import { COLLISIONS_MAP } from './Game.constants'
import { MAP_IMAGE, PLAYER_IMAGE } from './Game.image'
import { setKeyboardNavigation } from './utils'

export const Game = () => {
  console.log('updated')
  const canvasRef = useCanvas((ctx, canvas) => {
    canvas.width = 1024
    canvas.height = 576
    const offset = { x: -735, y: -650 }
    const boundaries = getBoundaries({
      offset,
      collisionMap: COLLISIONS_MAP,
      ctx,
    })

    const background = new Sprite({
      position: { x: offset.x, y: offset.y },
      image: MAP_IMAGE,
      ctx,
    })

    // const backgroundForeground = new Sprite({
    //   position: { x: offset.x, y: offset.y },
    //   image: mapImage,
    // })

    const player = new Sprite({
      position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2,
      },
      frames: { max: 4 },
      image: PLAYER_IMAGE,
      ctx,
    })

    const keys = {
      lastKey: '',
      w: { pressed: false },
      a: { pressed: false },
      s: { pressed: false },
      d: { pressed: false },
    }

    setKeyboardNavigation(keys)

    animateGame({ background, boundaries, player, keys })
  })

  return <canvas ref={canvasRef}> </canvas>
}
