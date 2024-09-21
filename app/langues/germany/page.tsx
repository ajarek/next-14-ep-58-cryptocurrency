import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '@/components/RadialCharCrypto'
import Chatbot from '@/components/Chatbot'
import CryptocurrencyTable from '@/components/CryptocurrencyTable'

const Germany = () => {
  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-between p-4'>
      <InfoCryptocurrency
        text1='Beste tägliche Darsteller'
        text2='Die schlechtesten täglichen Darsteller'
        text3='Kürzlich bullisch geworden'
        text4='Kürzlich bärisch geworden'
      />
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <BarChartBitcoin
          description='Januar - Juni 2024'
          info1='Der Trend dieses Monats'
          info2=' Daten der letzten 6 Monate anzeigen'
        />
        <BarChartEthereum
          description='Januar - Juni 2024'
          info1='Der Trend dieses Monats'
          info2=' Daten der letzten 6 Monate anzeigen'
        />
        <RadialCharCrypto
          description='Letzter Tag'
          legend='Preisänderung %'
          info1='Aktueller Trend'
          info2='Daten in Echtzeit anzeigen.'
        />
      </div>
      <Chatbot greeting=' Ich bin Jarobot #0. Ich kann Ihnen bei Ihrer Krypto-Investition helfen. Was kann ich heute für Sie tun?'
       prompt1='Was ist die nächste 100x-Münze?'  prompt2='Was ist derzeit der beste Krypto-Handel?' prompt3='Finden Sie die Top-5-Kryptos mit der höchsten TM-Trader-Bewertung.' prompt4='Welches Krypto-Asset verfügt über die beste Technologie?'
       info='Fragen Sie mich etwas über Kryptowährungen!' />
       <CryptocurrencyTable title='Länge der Kryptowährungsliste:' logo='Logo' name='Name' price='Preis' price24h='Preisänderung 24h' price24hProcent='Preisänderung % 24h' total='Gesamtvolumen'/>
    </main>
  )
}

export default Germany
