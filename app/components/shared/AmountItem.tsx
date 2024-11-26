
interface AmountItemProps {

  name: string,
  amount: number,
  color: string,


}

const AmountItem: React.FC<AmountItemProps> = ({ name, amount, color }) => {
  return (
    <div key={name} className="relative flex flex-col gap-2 items-start justify-center p-2 text-black">
      <div className={`absolute inset-y-0 left-0 w-2 bg-${color} rounded-full`}></div>
      <h3 className="text-xs min-w-max text-grey-500 ml-4">{name}</h3>
      <p className="text-lg font-bold text-black-600 ml-4">
        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount)}
      </p>
    </div>
  );
};

export default AmountItem;