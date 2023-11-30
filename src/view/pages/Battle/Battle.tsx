import tw from 'twin.macro'

export const Battle = () => {
  return <BattleScene id="battle"></BattleScene>
}

const BattleScene = tw.div`
  bg-black absolute bottom-0 left-0 right-0 top-0 opacity-0 pointer-events-none	
`
