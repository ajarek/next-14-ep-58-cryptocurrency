import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-8 pb-8'>
      <div
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
      </div>
      <div className='flex flex-wrap items-center gap-8'>
        <Link href=''>
        <Image
            src={'/images/ixs.svg'}
            width={32}
            height={32}
            alt={'x logo'}
          />
        </Link>
        <Link href=''>
        <Image
            src={'/images/tube.svg'}
            width={32}
            height={32}
            alt={'tube logo'}
          />
        </Link>
        <Link href=''>
        <Image
            src={'/images/discord.svg'}
            width={32}
            height={32}
            alt={'discord logo'}
          />
        </Link>
        <Link href=''>
        <Image
            src={'/images/fc.svg'}
            width={32}
            height={32}
            alt={'fc logo'}
          />
        </Link>
        <Link href=''>
        <Image
            src={'/images/ist.svg'}
            width={32}
            height={32}
            alt={'ist logo'}
          />
        </Link>
        
      </div>
        
    </div>
  )
}

export default Footer
