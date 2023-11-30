import { gsap } from 'gsap'
import { getBattleSprites, startBattle } from 'view/pages/Battle'

import { ActivateBattle } from './activateBattle.types'

export const activateBattle = ({ gameState, canvasInfo }: ActivateBattle) => {
  gameState.isGameStarted = false

  window.cancelAnimationFrame(gameState.animationFrameId)

  gsap.to('#battle', {
    opacity: 1,
    repeat: 3,
    yoyo: true,
    duration: 0.4,
    onComplete() {
      gsap.to('#battle', {
        opacity: 1,
        duration: 0.4,
        onComplete() {
          startBattle({
            sprites: getBattleSprites({
              ...canvasInfo,
            }),
          })
          gsap.to('#battle', {
            opacity: 0,
            duration: 0.4,
          })
        },
      })
    },
  })
}
