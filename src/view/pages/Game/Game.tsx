import { setInventory } from 'App'
import { memo } from 'react'
import tw from 'twin.macro'
import { Boundary, useCanvas } from 'view/components'
import { getSpecialMap } from 'view/components/domain'

import { Battle, getBattleSprites } from '../Battle'
import {
  BATTLE_ZONES_MAP,
  COLLISIONS_MAP,
  DEFAULT_GAME_SETTINGS,
} from './Game.constants'
import { CanvasInfo, GameSettings } from './Game.types'
import { getGameSprites, setKeyboardNavigation, startGame } from './utils'

export const Game = memo(
  ({
    height = DEFAULT_GAME_SETTINGS.height,
    offset = DEFAULT_GAME_SETTINGS.offset,
    width = DEFAULT_GAME_SETTINGS.width,
    //@ts-ignore
    setInv,
  }: GameSettings) => {
    const canvasRef = useCanvas((ctx, canvas) => {
      canvas.width = width
      canvas.height = height

      const canvasInfo: CanvasInfo = {
        canvas,
        ctx,
        offset,
      }

      const boundaries = getSpecialMap({
        offset,
        specialMap: COLLISIONS_MAP,
        ctx,
        classConstructor: Boundary,
      })

      const battleZones = getSpecialMap({
        offset,
        specialMap: BATTLE_ZONES_MAP,
        ctx,
        classConstructor: Boundary,
      })

      const keys = {
        lastKey: '',
        w: { pressed: false },
        a: { pressed: false },
        s: { pressed: false },
        d: { pressed: false },
      }

      setKeyboardNavigation(keys)

      const gameSprites = getBattleSprites({
        canvas,
        ctx,
        offset,
      })
      fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then(res => {
          return res.json()
        })
        .then(res => {
          setInventory({
            pokemons: [
              {
                name: 'bulbasaur',
                img: res.sprites.versions['generation-v']['black-white']
                  .animated.front_default,
                sprite: gameSprites.bulbasaurFront,
              },
            ],
          })
        })

      startGame({
        sprites: getGameSprites({ canvas, ctx, offset }),
        boundaries,
        battleZones,
        keys,
        canvasInfo,
        //@ts-ignore
        setInv,
      })
    })

    return (
      <Container>
        <Battle></Battle>
        <canvas ref={canvasRef}> </canvas>
      </Container>
    )
  },
)

const Container = tw.div`
  inline-block relative
`
