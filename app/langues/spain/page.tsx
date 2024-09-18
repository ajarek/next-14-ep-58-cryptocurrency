import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '@/components/RadialCharCrypto'
import Chatbot from '@/components/Chatbot'

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
      <Chatbot greeting=' Soy Jarobot #0. Puedo ayudarte con tu inversión en criptomonedas. ¿Qué puedo hacer por ti hoy?'
       prompt1='¿Cuál es la próxima moneda de 100x?'  prompt2='¿Cuál es el mejor comercio de criptomonedas en este momento?' prompt3='Encuentre las 5 principales criptomonedas que tienen la calificación más alta de TM Trader.' prompt4='¿Qué criptoactivo tiene la mejor tecnología?'
       info='¡Pregúntame cualquier cosa sobre criptomonedas!' />
    </main>
  )
}

export default Spain
