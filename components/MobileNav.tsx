'use client'
import { Bitcoin, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Flags from './Flags'


const MobileNav = () => {
  const pathname = usePathname()
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden "
      >
        <SheetHeader>
        <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Bitcoin size={32} className='' />
        <h1 className='font-semibold text-xl yellow capitalize '>
        Cryptocurrency
        </h1>
      </Link>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 ">
        <Flags/>
        <Link
          href='/'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
          <Image src={'/images/bitcoin.png'} width={32} height={32} alt={'bitcoin'}/>
          <h4>$57,211.10</h4>
        </Link>
       
        <Link
          href='/reviews'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
          <Image src={'/images/ethereum.png'} width={32} height={32} alt={'bitcoin'}/>
          <h4>$2,338.48</h4>
        </Link>
      
        
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
