import { Rectangle } from 'view/components/domain'

export interface IsColliding {
  object: Rectangle
  boundaries: Rectangle[]
}
