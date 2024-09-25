import { Button } from './ui/button'

import React from 'react'
type Array = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
}

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  array: Array[]
}

const AddButton = ({ onClick, array }: Props) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 p-8'>
      {array
        .filter((cr, inx, arr) => inx < arr.length / 10)
        .map((btn, inx) => (
          <Button
            key={inx}
            onClick={onClick}
            className='bg-blue-700 hover:bg-blue-500 text-white focus:bg-blue-500'
          >
            {inx + 1}
          </Button>
        ))}
    </div>
  )
}

export default AddButton
