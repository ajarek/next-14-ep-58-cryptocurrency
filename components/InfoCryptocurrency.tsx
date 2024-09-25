import React from 'react'
import Image from 'next/image'
import crypto from '../data/crypto.json'
const InfoCryptocurrency = ({
  text1,
  text2,
  text3,
  text4,
}: {
  text1: string
  text2: string
  text3: string
  text4: string
}) => {
  return (
    <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
      <div className='border-2 rounded-sm h-[300px] p-2'>
        <h1 className='border-b-2 pb-2'>{text1}</h1>
        <div className='flex flex-col justify-center gap-6 mt-4 '>
          {crypto
            .filter((cr, idx) => idx < 5)
            .map((cr) => (
              <div
                key={cr.id}
                className='flex justify-between '
              >
                <div className='flex items-center gap-2'>
                  <div>
                    <Image
                      src={cr.image}
                      alt='image'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{cr.name.slice(0, 15)}</div>
                  <div>{cr.symbol.toUpperCase()}</div>
                </div>
                <div
                  className={
                    cr.price_change_24h / cr.current_price >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {((cr.price_change_24h / cr.current_price) * 100).toFixed(2)}%
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='border-2 rounded-sm h-[300px] p-2'>
        <h1 className='border-b-2 pb-2'>{text2}</h1>
        <div className='flex flex-col justify-center gap-6 mt-4 '>
          {crypto
            .filter((cr) => cr.market_cap_rank > 95)
            .map((cr) => (
              <div
                key={cr.id}
                className='flex justify-between '
              >
                <div className='flex items-center gap-2'>
                  <div>
                    <Image
                      src={cr.image}
                      alt='image'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{cr.name.slice(0, 15)}</div>
                  <div>{cr.symbol.toUpperCase()}</div>
                </div>
                <div
                  className={
                    cr.price_change_24h / cr.current_price >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {((cr.price_change_24h / cr.current_price) * 100).toFixed(2)}%
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='border-2 rounded-sm h-[300px] p-2'>
        <h1 className='border-b-2 pb-2'>{text3}</h1>
        <div className='flex flex-col justify-center gap-6 mt-4 '>
          {crypto
            .sort(
              (a, b) =>
                b.market_cap_change_percentage_24h -
                a.market_cap_change_percentage_24h
            )
            .filter((cr, idx) => idx < 5)
            .map((cr) => (
              <div
                key={cr.id}
                className='flex justify-between '
              >
                <div className='flex items-center gap-2'>
                  <div>
                    <Image
                      src={cr.image}
                      alt='image'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{cr.name.slice(0, 15)}</div>
                  <div>{cr.symbol.toUpperCase()}</div>
                </div>
                <div
                  className={
                    cr.price_change_24h / cr.current_price >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {((cr.price_change_24h / cr.current_price) * 100).toFixed(2)}%
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='border-2 rounded-sm h-[300px] p-2'>
        <h1 className='border-b-2 pb-2'>{text4}</h1>
        <div className='flex flex-col justify-center gap-6 mt-4 '>
          {crypto
            .sort(
              (a, b) =>
                a.market_cap_change_percentage_24h -
                b.market_cap_change_percentage_24h
            )
            .filter((cr, idx) => idx < 5)
            .map((cr) => (
              <div
                key={cr.id}
                className='flex justify-between '
              >
                <div className='flex items-center gap-2'>
                  <div>
                    <Image
                      src={cr.image}
                      alt='image'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{cr.name.slice(0, 15)}</div>
                  <div>{cr.symbol.toUpperCase()}</div>
                </div>
                <div
                  className={
                    cr.price_change_24h / cr.current_price >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {((cr.price_change_24h / cr.current_price) * 100).toFixed(2)}%
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default InfoCryptocurrency
