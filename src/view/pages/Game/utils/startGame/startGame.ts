import { PlayerSprite } from 'view/components'

import { drawInteractiveZones } from './drawInteractiveZones'
import { drawSprites } from './drawSprites/drawSprites'
import { GameState, StartGame } from './startGame.types'
import { startPlayerLifeCycle } from './startPlayerLifeCycle'

export const startGame = ({
  sprites,
  boundaries,
  keys,
  battleZones,
  canvasInfo,
}: StartGame) => {
  const gameState: GameState = {
    isGameStarted: true,
    animationFrameId: 0,
  }

  const startGameLoop = () => {
    gameState.animationFrameId = window.requestAnimationFrame(startGameLoop)

    drawSprites({ sprites })

    drawInteractiveZones({ interactiveZone: [...battleZones, ...boundaries] })

    const movables = [
      sprites.background,
      ...boundaries,
      sprites.backgroundForeground,
      ...battleZones,
    ]

    // activateBattle({ gameState, canvasInfo })

    startPlayerLifeCycle({
      boundaries,
      battleZones,
      keys: keys,
      player: sprites.player as PlayerSprite,
      movables,
      gameState,
      canvasInfo,
    })
  }

  startGameLoop()
}
