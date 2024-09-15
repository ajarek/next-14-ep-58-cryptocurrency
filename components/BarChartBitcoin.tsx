"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", bitcoin: 71394.04, },
  { month: "February", bitcoin: 69402.86,  },
  { month: "March", bitcoin: 69666.93,  },
  { month: "April", bitcoin: 70612.79,  },
  { month: "May", bitcoin: 63866.68,  },
  { month: "June", bitcoin: 56103.11,  },
]


const chartConfig = {
  bitcoin: {
    label: "Bitcoin",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function BarChartBitcoin({description, info1, info2}:{description:string, info1:string, info2:string}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bitcoin</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="bitcoin" fill="var(--color-bitcoin)" radius={4} barSize={32}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
        {info1} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
         {info2}
        </div>
      </CardFooter>
    </Card>
  )
}
