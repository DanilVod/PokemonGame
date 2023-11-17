import { SetKeyboardNavigationKeys } from './setKeyboardNavigation.types'

export const setKeyboardNavigation = (keys: SetKeyboardNavigationKeys) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'w':
      case 'a':
      case 's':
      case 'd':
        keys[e.key].pressed = true
        keys.lastKey = e.key
        break
      default:
        break
    }
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'w':
      case 'a':
      case 's':
      case 'd':
        keys[e.key].pressed = false
        break
      default:
        break
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}
