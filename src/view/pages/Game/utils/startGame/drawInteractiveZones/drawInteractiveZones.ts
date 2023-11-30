import { DrawInteractiveZones } from './drawInteractiveZones.types'

export const drawInteractiveZones = ({
  interactiveZone,
}: DrawInteractiveZones) => {
  interactiveZone.forEach(interactiveZone => {
    interactiveZone.draw()
  })
}
