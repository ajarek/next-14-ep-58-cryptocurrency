'use client'

import { Bitcoin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Flags from './Flags'

const Links = () => {
  return (
    <div className='max-lg:hidden w-full flex items-center justify-between   '>
      <div
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Bitcoin
          size={32}
          className='text-primary'
        />
        <h1 className='font-bold text-xl text-primary italic '>
          Cryptocurrency
        </h1>
      </div>

      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href='/'
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
          href='/reviews'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
          <Image
            src={'/images/ethereum.png'}
            width={32}
            height={32}
            alt={'bitcoin'}
          />
          <h4>$2,338.48</h4>
        </Link>
        <Flags />
      </div>
    </div>
  )
}

export default Links
