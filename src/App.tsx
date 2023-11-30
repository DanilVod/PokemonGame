import { useEffect, useState } from 'react'
import 'twin.macro'
import { AnimatedSprite } from 'view/components/domain'

import { Game } from './view/pages'

export interface Pokemon {
  name: string
  sprite: AnimatedSprite
  img: string
}

export interface Inventory {
  pokemons?: Pokemon[]
}

export const GAME_INVENTORY: Inventory = {
  pokemons: [],
}

enum LOCAL_STORAGE_KEYS {
  GAME_INVENTORY = 'GAME_INVENTORY',
}

export const getInventory = (): Inventory | null => {
  const item = localStorage.getItem(LOCAL_STORAGE_KEYS.GAME_INVENTORY)
  if (item === null) {
    return null
  } else {
    return JSON.parse(item)
  }
}

export const setInventory = (inventory: Inventory) => {
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.GAME_INVENTORY,
    JSON.stringify(inventory),
  )
}

const App = () => {
  const [inv, setInv] = useState<Inventory | null>(getInventory())

  type tsd = { className: string; classNamed: number }
  type customPick<obj, value extends keyof obj> = { [key in value]: obj[key] }

  let str: Pick<tsd, 'className'> = {
    className: 'ds',
  }

  const fssa: { className: tsd['className'] } = {
    className: 'string',
  }

  let tipoString: string = 'fds'

  tipoString as number

  useEffect(() => {
    const checkInventoryChanges = () => {
      setInv(getInventory())
    }

    const interval = setInterval(checkInventoryChanges, 1000)

    return () => clearInterval(interval)
  }, [inv])

  console.log(inv)
  return (
    <>
      <Game height={576} width={1024} />
      <div>
        {inv?.pokemons?.map(pokemon => {
          const pokemonImage = <img src={pokemon.img} />

          return (
            <>
              {pokemon.name}
              {pokemonImage}
            </>
          )
        })}
      </div>
      {/* <button tw="border border-sky-500" onClick={handleClick}>
        Click
      </button> */}
    </>
  )
}

export default App
