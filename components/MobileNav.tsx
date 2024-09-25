'use client'

import Image from 'next/image'
import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import Flags from './Flags'
import { useCartStore } from '@/store/cartStore'

const MobileNav = () => {
  const { items } = useCartStore()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden '
      >
        <SheetHeader>
          <Link
            href='/'
            className='relative flex items-center gap-2 max-sm-gap-1'
          >
            <Image
              src={'/images/crypto.png'}
              width={32}
              height={32}
              alt={'crypto logo'}
            />
            <h1 className='font-bold text-xl text-primary italic '>
              Cryptocurrency
            </h1>
          </Link>
        </SheetHeader>
        <div className='flex flex-col gap-4 mt-4 '>
          <Flags />

          {items.length > 0 && (
            <Link
              href='/cart'
              className={`flex items-center  px-3 rounded-sm `}
            >
              <ShoppingCart
                size={24}
                className=''
              />
              <div className='pb-3 text-red-500'>
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </div>
            </Link>
          )}

          <Link
            href='https://bitcoin.org/en/'
            target='_blank'
            className={`flex items-center gap-2  text-xl hover:text-primary `}
          >
            <Image
              src={'/images/bitcoin.png'}
              width={32}
              height={32}
              alt={'bitcoin'}
            />
            <h4>$57,211.10</h4>
          </Link>

          <Link
            href='https://ethereum.org/en/'
            target='_blank'
            className={`flex items-center gap-2  text-xl hover:text-primary `}
          >
            <Image
              src={'/images/ethereum.png'}
              width={32}
              height={32}
              alt={'ethereum'}
            />
            <h4>$2,338.48</h4>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
