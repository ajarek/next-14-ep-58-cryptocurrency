'use client'
import Image from 'next/image'
import crypto from '../data/crypto.json'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'
import AddButton from '@/components/AddButton'
import Link from 'next/link'
type CryptocurrencyTableProps = {
  title: string
  logo: string
  name: string
  price: string
  price24h: string
  price24hProcent: string
  total: string
}
const CryptocurrencyTable = ({
  title,
  logo,
  name,
  price,
  price24h,
  price24hProcent,
  total,
}: CryptocurrencyTableProps) => {
  const [end, setEnd] = React.useState(10)
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement
    setEnd(+target.innerText * 10)
  }
  return (
    <div className='container p-4 mt-4'>
      <h1 className='text-xl font-semibold'>
        {title} {crypto.length}
      </h1>
      <Table>
        <TableCaption>
          <AddButton
            onClick={handleButton}
            array={crypto}
          />
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=''>{logo}</TableHead>
            <TableHead className=''>{name}</TableHead>
            <TableHead className=''>{price}</TableHead>
            <TableHead className='max-sm:hidden'>{price24h}</TableHead>
            <TableHead className='max-sm:hidden'>{price24hProcent}</TableHead>
            <TableHead className='max-sm:hidden'>{total}</TableHead>
            <TableHead className=''>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crypto
            .sort((a, b) => b.current_price - a.current_price)
            .filter((cr, idx) => idx < end && idx >= end - 10)
            .map((cr) => (
              <TableRow key={cr.id}>
                <TableCell className=''>
                  <Image
                    src={cr.image}
                    alt='image'
                    width={20}
                    height={20}
                  />
                </TableCell>
                <TableCell className=''>{cr.name}</TableCell>
                <TableCell className=''>
                  ${cr.current_price.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    cr.price_change_24h > 0
                      ? 'text-green-500 max-sm:hidden'
                      : 'text-red-500 max-sm:hidden'
                  }
                >
                  ${cr.price_change_24h.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    cr.price_change_percentage_24h > 0
                      ? 'text-green-500 max-sm:hidden'
                      : 'text-red-500 max-sm:hidden'
                  }
                >
                  {cr.price_change_percentage_24h}%
                </TableCell>
                <TableCell className='max-sm:hidden'>
                  {cr.total_volume}
                </TableCell>
                <TableCell className=''>
                  {cr.current_price >= 0.01 ? (
                    <Link
                      href={`/crypto-id?id=${cr.id}&name=${cr.name}&current_price=${cr.current_price}&image=${cr.image} &quantity= ${cr.quantity}`}
                      className='bg-primary text-primary-foreground px-2 py-1 rounded-sm'
                    >
                      Buy
                    </Link>
                  ) : (
                    ''
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CryptocurrencyTable
