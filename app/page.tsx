import InfoCryptocurrency from "@/components/InfoCryptocurrency";
import { BarChartBitcoin } from '@/components/BarChartBitcoin'
import { BarChartEthereum } from "@/components/BarChartEthereum";


export default function Home() {
  return (
   <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-between p-4 gap-4">
          <InfoCryptocurrency text1='Best Daily Performers' text2="Worst Daily Performers" text3='Recently Turned Bullish' text4='Recently Turned Bearish'/>
          <div className="w-full flex gap-4 place-items-center">
          <BarChartBitcoin/>
          <BarChartEthereum/>
          <BarChartBitcoin/>

          </div>
   </main>
  );
}
