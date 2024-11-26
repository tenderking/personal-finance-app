import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from '~/components/shared/Button';
import { Chart, DoughnutController, ArcElement, Legend, Tooltip } from 'chart.js';
import { useEffect, useRef } from 'react';
import config from 'tailwind.config';
import AmountItem from '../../../components/shared/AmountItem';
interface BudgetsWidgetProps {
  seeDetailsUrl: string,
  totalBudget: number,
  totalSpent: number,
  budgets: {
    name: string,
    amount: number,
  }[]
}

export const BudgetsWidget = ({ seeDetailsUrl }: BudgetsWidgetProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const colors = {
    green: config.theme.extend.colors['green'],
    cyan: config.theme.extend.colors['cyan'],
    navy: config.theme.extend.colors['navy'],
    yellow: config.theme.extend.colors['yellow'],
  }

  const budgets: {
    name: string,
    amount: number,
  }[] = [
      { name: 'Groceries', amount: 300 },
      { name: 'Entertainment', amount: 50 },
      { name: 'Transport', amount: 100 },
    ];

  const totalBudget = budgets.reduce((acc, budget) => acc + budget.amount, 0);
  const totalSpent = 450;


  Chart.register(DoughnutController, ArcElement, Legend, Tooltip);
  const data = {
    labels: [budgets[0].name, budgets[1].name, budgets[2].name],
    datasets: [{
      label: 'My First Dataset',
      data: [budgets[0].amount, budgets[1].amount, budgets[2].amount],
      backgroundColor: [
        colors.green,
        colors.cyan,
        colors.yellow
      ],
      hoverOffset: 4,
      weight: 4,
      borderWidth: 0
    },
    // Add a new dataset with the same data to create the second ring
    {
      label: 'Second Ring',
      data: [budgets[0].amount, budgets[1].amount, budgets[2].amount],
      backgroundColor: [
        `${colors.green}80`, // 50% opacity
        `${colors.cyan}80`,  // 50% opacity
        `${colors.yellow}80` // 50% opacity
      ],

      hoverOffset: 4,
      weight: 2,
      borderWidth: 0
    }]
  };

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          datasets: data.datasets
        },
        options: {
          cutout: '65%', // Adjust this value for the inner radius of the first ring
          radius: '90%',   // Adjust this value to control the overall size and create space for the second ring

        },
        plugins: [{
          id: 'customText',
          beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;

            ctx.restore();

            ctx.textBaseline = 'middle';

            const text = `$${totalBudget.toString()}`;
            const text2 = `of $${totalSpent.toString()} limit`;
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;
            const textY2 = height / 2 + 20;

            ctx.fillStyle = '#000'; // Text color
            ctx.font = 'bold 36px'; // Big, black, and bold text
            ctx.fillText(text, textX, textY);

            ctx.fillStyle = '#6B7280'; // grey-500 color
            ctx.font = '12px'; // Small text
            ctx.fillText(text2, textX, textY2);
            ctx.save();
          }
        }]
      });
    }
  }, []);


  return (
    <Router>
      <div className="flex flex-col gap-4 items-center justify-center rounded-lg p-4 bg-white text-black">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl  font-bold text-grey-900">Pots</h3>
          <Button label="See details" variant="tertiary" type="link" href={seeDetailsUrl} />
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className='max-w-80 flex items-center justify-center'>
            <canvas id="myChart" ref={chartRef}></canvas>

          </div>
          <div className="mr-auto grid grid-cols-2  md:grid-cols-1 gap-2 max-h-min mt-4">
            {budgets.map((budget, index) => (
              <AmountItem key={budget.name} item={budget} index={index} defaultColors={Object.keys(colors)} />
            )
            )}
          </div>
        </div>

      </div>
    </Router>
  );
}