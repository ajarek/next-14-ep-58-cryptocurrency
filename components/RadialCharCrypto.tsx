"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

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

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", bitcoin: 2.55172, ethereum: 2.8897 }]

const chartConfig = {
  bitcoin: {
    label: "Bitcoin",
    color: "hsl(var(--chart-3))",
  },
  ethereum: {
    label: "Ethereum",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function RadialCharCrypto({description, legend, info1, info2}:{description:string,legend:string, info1:string, info2:string}) {
  const totalVisitors =((1- chartData[0].bitcoin / chartData[0].ethereum)*100).toFixed(0)

  return (
    <Card className="w-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Bitcoin/Ethereum</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={70}
            outerRadius={140}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          {legend}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="bitcoin"
              stackId="a"
              cornerRadius={3}
              fill="var(--color-bitcoin)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="ethereum"
              fill="var(--color-ethereum)"
              stackId="a"
              cornerRadius={3}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
        {info1} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
         { info2}
        </div>
      </CardFooter>
    </Card>
  )
}
