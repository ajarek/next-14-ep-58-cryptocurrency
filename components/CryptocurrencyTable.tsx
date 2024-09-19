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
import { Button } from './ui/button'

import React from 'react'

export const AddButton = ({onClick}: any) => {
  return (
    <div className='flex items-center justify-center gap-4 p-8'>
      {crypto
      .filter((cr,inx,arr)=>inx<arr.length/10)
      .map((btn,inx) => (
          <Button
        key={inx}
        onClick={onClick}
        className=''
      >
        {inx+1}
      </Button>
        )
      )}
      </div>
  )
}


const CryptocurrencyTable = () => {
  const [end, setEnd]=React.useState(5)
  const handleButton=(e)=>{
    setEnd((e.target.innerText)*5)
  }
  return (
    <div className='container p-4'>
      <h1 className='text-xl font-semibold'>Cryptocurrency list:</h1>
      <Table>
        <TableCaption><AddButton onClick={handleButton}/></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=''>Logo</TableHead>
            <TableHead className=''>Name</TableHead>
            <TableHead className=''>Price</TableHead>
            <TableHead className=''>Price change 24h</TableHead>
            <TableHead className=''>Price change % 24h</TableHead>
            <TableHead className=''>Total volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crypto
            .sort((a, b) => b.current_price - a.current_price)
            .filter((cr, idx) => idx < end && idx>=end-5)
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
                <TableCell  className={
                    cr.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                  }>
                  {cr.price_change_percentage_24h}%
                </TableCell>
                <TableCell className=''>{cr.total_volume}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export default CryptocurrencyTable
