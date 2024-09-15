import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '@/components/RadialCharCrypto'

const Spain = () => {
  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-between p-4'>
      <InfoCryptocurrency
        text1='Mejores artistas diarias'
        text2='Peores artistas diarios'
        text3='Recientemente se volvió alcista'
        text4='Recientemente se volvió bajista'
      />
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <BarChartBitcoin
          description='Enero - Junio ​​2024'
          info1='La tendencia de este mes'
          info2=' Ver datos de los últimos 6 meses'
        />
        <BarChartEthereum
          description='Enero - Junio ​​2024'
          info1='La tendencia de este mes'
          info2=' Ver datos de los últimos 6 meses'
        />
        <RadialCharCrypto
          description='Día último'
          legend='% de cambio de precio'
          info1='Tendencia actual.'
          info2=' Ver datos en tiempo real.'
        />
      </div>
    </main>
  )
}

export default Spain
