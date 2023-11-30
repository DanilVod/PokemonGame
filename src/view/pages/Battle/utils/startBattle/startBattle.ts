import { StartBattle } from './startBattle.types'

export const startBattle = ({ sprites }: StartBattle) => {
  const startBattleLoop = () => {
    const as = window.requestAnimationFrame(startBattleLoop)

    sprites.battleBackground.draw()

    sprites.bulbasaurFront.draw()

    //@ts-ignore
    sprites.bulbasaurFront.animate()
  }

  startBattleLoop()
}
