import { Rectangle } from 'view/components/domain'

export const rectangleCollision = ({
  rectangle1,
  rectangle2,
}: {
  rectangle1: Rectangle
  rectangle2: Rectangle
}) => {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  )
}
