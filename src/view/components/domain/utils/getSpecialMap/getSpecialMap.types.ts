import { Position } from 'view/components/domain'

export interface GetSpecialMap<T> {
  specialMap: number[]
  offset: Position
  ctx: CanvasRenderingContext2D
  classConstructor: new (...args: any[]) => T
}
