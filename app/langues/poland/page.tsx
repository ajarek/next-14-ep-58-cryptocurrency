import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '@/components/RadialCharCrypto'
import Chatbot from '@/components/Chatbot'
import CryptocurrencyTable from '@/components/CryptocurrencyTable'
export default function Home() {
  return (
    <main className=' flex min-h-[calc(100vh-64px)] flex-col items-center justify-between p-4 gap-4'>
      <InfoCryptocurrency
        text1='Najlepsze bieżące wzrosty'
        text2='Najgorsze bieżące wzrosty'
        text3='Ostatnio stał się Bykiem'
        text4='Niedawno zmienił się w Niedźwiedzia'
      />
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <BarChartBitcoin
          description='Styczeń – Czerwiec 2024 r'
          info1='Trend tego miesiąca'
          info2=' View data for the last 6 months'
        />
        <BarChartEthereum
          description='Styczeń – Czerwiec 2024 r'
          info1='Trend tego miesiąca'
          info2=' View data for the last 6 months'
        />
        <RadialCharCrypto
          description='Ostatni dzień'
          legend='Zmiana ceny %'
          info1='Aktualny trend'
          info2=' Przeglądaj dane w czasie rzeczywistym.'
        />
      </div>
      <Chatbot
        greeting=' Jestem Jarobot nr 0. Pomogę Ci w inwestowaniu w kryptowaluty. Co mogę dzisiaj dla Ciebie zrobić?'
        prompt1='Jaka jest następna moneta 100x?'
        prompt2='Jaki jest obecnie najlepszy handel kryptowalutami?'
        prompt3='Znajdź 5 najlepszych kryptowalut, które mają najwyższą ocenę TM Trader.'
        prompt4='Jaki zasób kryptograficzny ma najlepszą technologię?'
        info='Zapytaj mnie o cokolwiek na temat kryptowalut!'
      />
      <CryptocurrencyTable
        title='Długość listy kryptowalut:'
        logo='Logo'
        name='Nazwa'
        price='Cena'
        price24h='Zmiana ceny 24h'
        price24hProcent='Zmiana % ceny 24h'
        total='Całkowity wolumen '
      />
    </main>
  )
}
