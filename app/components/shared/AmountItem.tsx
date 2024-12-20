interface AmountItemProps {

  name: string,
  amount: number,
  color: 'green' | 'cyan' | 'navy' | 'yellow' | 'red'
  noDecimals?: boolean


}

const AmountItem: React.FC<AmountItemProps> = ({ name, amount, color, noDecimals }) => {
  let bgColor = {
    green: 'bg-green',
    cyan: 'bg-cyan',
    navy: 'bg-navy',
    yellow: 'bg-yellow',
    red: 'bg-red',
  }

  let formattedAmount = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount);

  if (noDecimals) {
    formattedAmount = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);

  }
  return (
    <div key={name} className="relative h-[43px] flex flex-col min-w-max  gap-2 items-start justify-center p-4 text-black">
      <div className={`absolute  z-10 inset-y-0 left-0 w-1 ${bgColor[color]} bg-amber-400 rounded-full`}></div>
      <h3 className="text-xs min-w-max text-grey-500 ml-4">{name}</h3>
      <p className="text-lg font-bold text-black-600 ml-4">
        {formattedAmount}
      </p>
    </div>
  );
};

export default AmountItem;