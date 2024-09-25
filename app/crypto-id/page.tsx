'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import panels from '@/data/crypto.json'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
const CryptoId = ({
  searchParams,
}: {
  searchParams: {
    id: string
    name: string
    current_price: string
    image: string
    quantity: string
  }
}) => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  type Cart = {
    id: number
    name: string
    current_price: number
    quantity: number
    image: string
  }
  const [quantityPanel, setQuantityPanel] = useState(+searchParams.quantity)
  const panel = panels.find((pl) => pl.id === searchParams.id)

  const increment = () => {
    const actualQuantity = Number(quantityPanel) + 1
    setQuantityPanel(actualQuantity)
  }

  const decrement = () => {
    const actualQuantity = +quantityPanel > 1 ? Number(quantityPanel) - 1 : 1
    setQuantityPanel(actualQuantity)
  }

  const handleCart = (item: Cart) => {
    if (items.some((i) => i.id === item.id)) return
    const newItem = { ...item, quantity: +quantityPanel }
    addItemToCart(newItem)
    router.push('/cart')
    setQuantityPanel(1)
  }

  return (
    <div className=' w-full min-h-[calc(100vh-194px)] grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-8  p-4 place-items-center items-center    py-4'>
      <div className='relative  '>
        <Image
          src={panel?.image || ''}
          alt='Logo'
          width={100}
          height={100}
          className='object-cover  '
          priority
        />
      </div>

      <div className=' w-full flex flex-col  gap-8'>
        <h1 className='text-3xl font-bold'>
          <span className='text-gray-400 text-lg'>name: </span>
          {panel?.name}
        </h1>
        <p className='text-2xl font-bold'>
          <span className='text-gray-400 text-lg'>current_price: </span>$
          {panel?.current_price}
        </p>
        <p className='text-2xl font-bold'>
          <span className='text-gray-400 text-lg'>total price: </span>$
          {(Number(panel?.current_price) * quantityPanel).toFixed(2)}
        </p>

        <div className='flex items-center gap-2 '>
          <span className='text-gray-400 text-lg font-bold'>quantity: </span>
          <Button
            size={'icon'}
            className='bg-transparent rounded-full'
            onClick={() => decrement()}
          >
            ➖
          </Button>
          <div className='w-9 h-9 flex items-center justify-center  rounded-full border-2 border-gray-500'>
            {quantityPanel.toString()}
          </div>
          <Button
            size={'icon'}
            className='bg-transparent rounded-full'
            onClick={() => increment()}
          >
            ➕
          </Button>
        </div>
        <Button
          className='self-center max-w-fit bg-blue-600 text-white  hover:bg-blue-600 transition-colors'
          onClick={() =>
            handleCart({
              id: Number(panel?.id) || 0,
              name: panel?.name || '',
              current_price: panel?.current_price || 0,
              quantity: quantityPanel,
              image: panel?.image || '',
            })
          }
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default CryptoId
