'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A bar chart'

const chartData = [
  { month: 'January', ethereum: 2231.4 },
  { month: 'February', ethereum: 2288.32 },
  { month: 'March', ethereum: 4066.19 },
  { month: 'April', ethereum: 3158.79 },
  { month: 'May', ethereum: 2937.68 },
  { month: 'June', ethereum: 3439.11 },
]

const chartConfig = {
  ethereum: {
    label: 'Ethereum',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function BarChartEthereum({
  description,
  info1,
  info2,
}: {
  description: string
  info1: string
  info2: string
}) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Ethereum</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey='ethereum'
              fill='var(--color-ethereum)'
              radius={4}
              barSize={32}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          {info1} <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>{info2}</div>
      </CardFooter>
    </Card>
  )
}
