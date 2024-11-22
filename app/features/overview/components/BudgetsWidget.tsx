import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from '~/components/shared/Button';
import { Chart, DoughnutController, ArcElement, Legend, Tooltip } from 'chart.js';
import { useEffect, useRef } from 'react';

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

  Chart.register(DoughnutController, ArcElement, Legend, Tooltip);
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    },
    // Add a new dataset with the same data to create the second ring
    {
      label: 'Second Ring',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Use slightly transparent colors for the second ring
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 205, 86, 0.5)'
      ],
      hoverOffset: 4
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
          cutout: '60%', // Adjust this value for the inner radius of the first ring
          radius: '80%'   // Adjust this value to control the overall size and create space for the second ring
        }
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
        <canvas id="myChart" ref={chartRef}></canvas>
      </div>
    </Router>
  );
}