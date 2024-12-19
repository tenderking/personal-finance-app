import { useState, useEffect } from 'react';
import { Button } from '~/components/shared/Button';



interface RecurringWidgetProps {
  bill: {
    name: string,
    amount: number,
    color: string,
  }[]
  seeDetailsUrl: string
}

export const RecurringWidget = ({ bill, seeDetailsUrl }: RecurringWidgetProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-lg p-4 bg-white text-black">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl  font-bold text-grey-900">Recurring</h3>
        <Button label="See details" variant="tertiary" type="link" href={seeDetailsUrl} />
      </div>
      <ul className="z-0 mx-0  w-full">
        {bill.map((bill) => (
          <li key={bill.name} className="relative ml-1 flex mb-4 py-4  gap-2 items-center space-between min-w-max  text-black bg-beige-100 rounded-xl">
            <div className={`absolute -inset-x-1 -z-20 inset-y-0 w-full  bg-${bill.color} rounded-xl`}></div>
            <h3 className="text-xs min-w-max text-grey-500 ml-4">{bill.name}</h3>
            <p className=" font-bold text-black-600 ml-4">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(bill.amount)}
            </p>
          </li>
        ))}
      </ul>

    </div>
  );
};