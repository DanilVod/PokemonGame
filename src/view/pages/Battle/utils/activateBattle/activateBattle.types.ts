import { CanvasInfo } from '../../../Game/Game.types'
import { GameState } from '../../../Game/utils/startGame'

export interface ActivateBattle {
  gameState: GameState
  canvasInfo: CanvasInfo
}
