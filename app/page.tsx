import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '../components/RadialCharCrypto'
import Chatbot from '@/components/Chatbot'
import CryptocurrencyTable from '@/components/CryptocurrencyTable'

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-between p-4 gap-4'>
      <InfoCryptocurrency
        text1='Best Daily Performers'
        text2='Worst Daily Performers'
        text3='Recently Turned Bullish'
        text4='Recently Turned Bearish'
      />
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <BarChartBitcoin
          description='January - June 2024'
          info1='This month`s trend'
          info2=' View data for the last 6 months'
        />
        <BarChartEthereum
          description='January - June 2024'
          info1='This month`s trend'
          info2=' View data for the last 6 months'
        />
        <RadialCharCrypto
          description='Last day'
          legend='Price change %'
          info1='Current trend'
          info2=' View data in real time.'
        />
      </div>
      <Chatbot
        greeting=' I’m Jarobot #0. I can help you with your crypto investing. What can I do for you today?'
        prompt1='What is the next 100x coin?'
        prompt2='What is the best crypto trade right now?'
        prompt3='Find the top 5 cryptos that have the highest TM Trader grade.'
        prompt4='What crypto asset has the best technology?'
        info='Ask me anything about cryptocurrencies!'
      />
      <CryptocurrencyTable title='Cryptocurrency list length:' logo='Logo' name='Name' price='Price' price24h='Price change 24h' price24hProcent='Price change % 24h' total='Total volume'/>
    </main>
  )
}
