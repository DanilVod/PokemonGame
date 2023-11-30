import { EnumerateProperties, Position } from 'view/components/domain'

import { getBattleSprites } from './getBattleSprites'

export type AvailableBattleSprite = EnumerateProperties<typeof getBattleSprites>

export interface GetBattleSprites {
  ctx: CanvasRenderingContext2D
  offset: Position
  canvas: HTMLCanvasElement
}
