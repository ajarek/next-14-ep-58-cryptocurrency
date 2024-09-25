import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '@/components/RadialCharCrypto'
import Chatbot from '@/components/Chatbot'
import CryptocurrencyTable from '@/components/CryptocurrencyTable'

const France = () => {
  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-between p-4'>
      <InfoCryptocurrency
        text1='Meilleurs artistes quotidiens'
        text2='Les pires artistes quotidiens'
        text3='Récemment devenu haussier'
        text4='Récemment devenu baissier'
      />
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center'>
        <BarChartBitcoin
          description='Janvier - Juin 2024'
          info1='La tendance du mois'
          info2=' Afficher les données des 6 derniers mois'
        />
        <BarChartEthereum
          description='Janvier - Juin 2024'
          info1='La tendance du mois'
          info2=' Afficher les données des 6 derniers mois'
        />
        <RadialCharCrypto
          description='Dernier jour'
          legend='Changement de prix %'
          info1='Tendance actuelle'
          info2=' Visualisez les données en temps réel.'
        />
      </div>
      <Chatbot
        greeting=' Je suis Jarobot #0. Je peux vous aider dans votre investissement crypto. Que puis-je faire pour vous aujourd`hui ?'
        prompt1='Quelle est la prochaine pièce 100x ?'
        prompt2='Quel est le meilleur échange de crypto-monnaies en ce moment ?'
        prompt3='Trouvez les 5 meilleurs cryptos qui ont la note TM Trader la plus élevée.'
        prompt4='Quel actif cryptographique possède la meilleure technologie?'
        info='Demandez-moi n`importe quoi sur les crypto-monnaies !'
      />
      <CryptocurrencyTable
        title='Longueur de la liste des cryptomonnaies :'
        logo='Logo'
        name='Nom'
        price='Prix'
        price24h='Changement de prix 24h'
        price24hProcent='Changement de prix % 24h'
        total='Volume total'
      />
    </main>
  )
}

export default France
