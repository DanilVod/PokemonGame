export enum KeyboardNavigationKeys {
  w = 'w',
  a = 'a',
  s = 's',
  d = 'd',
}

export type NavigationKeys = {
  [key in KeyboardNavigationKeys]: { pressed: boolean }
}

export interface SetKeyboardNavigationKeys extends NavigationKeys {
  lastKey?: string
}
