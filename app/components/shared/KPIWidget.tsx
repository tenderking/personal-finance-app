interface KPIWidgetProps {
  title: "Current Balance" | "Total Revenue" | "Total Expenses";
  value: number;
  color: "black" | "white";
}

export const KPIWidget = ({ title, value, color }: KPIWidgetProps) => {
  const blackWidget = "bg-black text-white";
  const whiteWidget = "bg-white text-black";
  return (
    <div className={`flex flex-col items-start justify-center rounded-lg shadow-md p-6 gap-4 w-full ${color === 'black' ? blackWidget : whiteWidget}`}>
      <h3 className={`text-xs   ${color === 'black' ? 'text-white' : 'text-grey-500'}`}>{title}</h3>
      <p className={`text-3xl font-bold text-${color}-600`}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
        value,
      )}
      </p>
    </div>
  );
};
