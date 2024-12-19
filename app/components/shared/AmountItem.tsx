import { c, l } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

interface AmountItemProps {

  name: string,
  amount: number,
  color: string | string[],
  noDecimals?: boolean


}

const AmountItem: React.FC<AmountItemProps> = ({ name, amount, color, noDecimals }) => {
  let bgColor;
  if (Array.isArray(color)) {
    bgColor = `bg-[${color}]`;
  } else {
    bgColor = `bg-${color}`;
  }
  let formattedAmount = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount);

  if (noDecimals) {
    formattedAmount = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);

  }
  return (
    <div key={name} className="relative flex flex-col  gap-2 items-start justify-center p-2 text-black">
      <div className={`absolute inset-y-0 left-0 w-2 ${bgColor} rounded-full`}></div>
      <p className="text-lg font-bold text-black-600 ml-4">
        {formattedAmount}
      </p>
    </div>
  );
};

export default AmountItem;