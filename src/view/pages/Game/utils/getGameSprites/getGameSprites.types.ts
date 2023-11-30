import { EnumerateProperties, Position } from 'view/components/domain'

import { getGameSprites } from './getGameSprites'

export type AvailableGameSprite = EnumerateProperties<typeof getGameSprites>

export interface GetGameSprites {
  ctx: CanvasRenderingContext2D
  offset: Position
  canvas: HTMLCanvasElement
}
