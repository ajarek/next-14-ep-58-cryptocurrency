import InfoCryptocurrency from '@/components/InfoCryptocurrency'
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from '@/components/BarChartEthereum'
import { RadialCharCrypto } from '@/components/RadialCharCrypto'

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
    </main>
  )
}

export default France
