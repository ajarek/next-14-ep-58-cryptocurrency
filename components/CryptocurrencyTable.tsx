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

const CryptocurrencyTable = () => {
  const [end, setEnd] = React.useState(10)
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement
    setEnd(+target.innerText * 10)
  }
  return (
    <div className='container p-4'>
      <h1 className='text-xl font-semibold'>Cryptocurrency list length: {crypto.length}</h1>
      <Table>
        <TableCaption>
          <AddButton
            onClick={handleButton}
            array={crypto}
          />
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=''>Logo</TableHead>
            <TableHead className=''>Name</TableHead>
            <TableHead className=''>Price</TableHead>
            <TableHead className=''>Price change 24h</TableHead>
            <TableHead className='max-sm:hidden'>Price change % 24h</TableHead>
            <TableHead className='max-sm:hidden'>Total volume</TableHead>
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
                    cr.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'
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
                <TableCell className='max-sm:hidden'>{cr.total_volume}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CryptocurrencyTable
