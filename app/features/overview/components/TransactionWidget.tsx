import { Button } from "~/components/shared/Button";
import { BrowserRouter as Router } from 'react-router-dom';
import { BaseListItem } from "~/components/shared/BaseListItem";

interface TransactionWidgetProps {
  seeDetailsUrl: string,
  transactions: {
    icon: string,
    name: string,
    amount: number,
    date: string,
  }[]

}
export const TransactionWidget = ({ seeDetailsUrl, transactions }: TransactionWidgetProps) => {
  return (
    <Router>
      <div className=" rounded-lg p-4 bg-white text-black">
        <div className="flex flex-col items-center justify-between w-full">
          <h3 className="text-xl  font-bold text-grey-900">Pots</h3>
          <Button label="See details" variant="tertiary" type="link" href={seeDetailsUrl} />
        </div>

        <ul className="flex flex-col items-center w-full">
          {transactions.map((transaction) => (
            <li key={transaction.name} className="flex flex-col gap-2 items-start justify-center  p-2 text-black">
              <BaseListItem image={transaction.icon} title={transaction.name} />
              <div className="flex flex-col items-center">

                <p className={`text-lg font-bold  ${transaction.amount <= 0 ? 'text-black-600' : 'text-green'}`}>{transaction.amount < 0 ? '' : '+'}{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(transaction.amount)}</p>
                <p className="text-xs text-grey-500">{transaction.date}</p>
              </div>

            </li>
          ))}
        </ul>

      </div>
    </Router>
  );
};