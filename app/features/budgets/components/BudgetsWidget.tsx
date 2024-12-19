import { Chart, DoughnutController, ArcElement, Legend, Tooltip } from 'chart.js';
import { useEffect, useRef } from 'react';
import { ClientOnly } from "remix-utils/client-only";

import config from 'tailwind.config';
import { Button } from '~/components/shared/Button';
import AmountItem from '~/components/shared/AmountItem';

interface BudgetsWidgetProps {
  seeDetailsUrl: string,
  totalBudget: number,
  totalSpent: number,
  budgets: {
    name: string,
    amount: number,
  }[]
}

export const BudgetsWidget = ({
  seeDetailsUrl,
  totalBudget,
  totalSpent,
  budgets,
}: BudgetsWidgetProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const colors = {
    green: config.theme.extend.colors['green'],
    cyan: config.theme.extend.colors['cyan'],
    navy: config.theme.extend.colors['navy'],
    yellow: config.theme.extend.colors['yellow'],
  }


  Chart.register(DoughnutController, ArcElement, Legend, Tooltip);
  const data = {
    labels: budgets.map(budget => budget.name), // Use map to get labels dynamically
    datasets: [{
      label: 'My First Dataset',
      data: budgets.map(budget => budget.amount), // Use map to get data dynamically
      backgroundColor: [
        colors.green,
        colors.cyan,
        colors.yellow,
        // Add more colors if needed
      ],
      hoverOffset: 4,
      weight: 4,
      borderWidth: 0
    },
    {
      label: 'Second Ring',
      data: budgets.map(budget => budget.amount), // Use map to get data dynamically
      backgroundColor: [
        `${colors.green}80`, // 50% opacity
        `${colors.cyan}80`,  // 50% opacity
        `${colors.yellow}80`, // 50% opacity
        // Add more colors if needed
      ],

      hoverOffset: 4,
      weight: 2,
      borderWidth: 0
    }]
  };


  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: data,
        options: {
          cutout: '65%',
          radius: '90%',
        },
        plugins: [{
          id: 'customText',
          beforeDraw(chart) {
            const { width, height, ctx } = chart;
            ctx.restore();
            ctx.textBaseline = 'middle';

            const text = `$${totalBudget}`;
            const text2 = `of $${totalSpent} limit`;
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;
            const textY2 = height / 2 + 20;

            ctx.fillStyle = '#000';
            ctx.font = 'bold 36px';
            ctx.fillText(text, textX, textY);

            ctx.fillStyle = '#6B7280';
            ctx.font = '12px';
            ctx.fillText(text2, textX, textY2);
            ctx.save();
          }
        }],
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Properly destroy the chart instance
        chartInstance = null;
      }
    };
  }, [budgets, totalBudget, totalSpent]);


  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-lg p-4 bg-white text-black">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl  font-bold text-grey-900">Pots</h3>
        <Button label="See details" variant="tertiary" type="link" href={seeDetailsUrl} />
      </div>
      <div className='flex md:flex-row flex-col'>
        <div className='max-w-80 flex items-center justify-center'>
          <ClientOnly fallback={<Fallback />}>
            {() => <canvas id="myChart" ref={chartRef}></canvas>}
          </ClientOnly>

        </div>
        <div className="mr-auto grid grid-cols-2  md:grid-cols-1 gap-2 max-h-min mt-4">
          {budgets.map((budget, index) => (
            <AmountItem key={budget.name} name={budget.name} amount={budget.amount} color={[Object.values(colors)[index]]} />
          ))}
        </div>
      </div>

    </div>
  );
}

const Fallback = () => (
  <div className="flex items-center justify-center w-full h-80 bg-grey-900 rounded-lg">
    <p className="text-gray-500">Loading chart...</p>
  </div>
);