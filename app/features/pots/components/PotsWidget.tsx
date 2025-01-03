import { Button } from "~/components/shared/Button";
import IconJarFill from "~/components/shared/Icons/IconJarFill";
import AmountItem from "~/components/shared/AmountItem";
import { useState, useEffect } from "react";


interface PotsWidgetProps {
  seeDetailsUrl: string,
  totalSavings: number,
  pots: {
    name: string,
    amount: number,
    color: string,
  }[]

}
export const PotsWidget = ({ seeDetailsUrl, totalSavings, pots }: PotsWidgetProps) => {
  const defaultColors = ['green', 'cyan', 'navy', 'yellow']
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="flex  flex-col  gap-4 items-center justify-center rounded-lg p-4 bg-white text-black">
      {/* Header Div */}
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl  font-bold text-grey-900">Pots</h3>
        <Button label="See details" variant="tertiary" type="link" href={seeDetailsUrl} />
      </div>
      {/* Content Div */}
      <div className="flex   flex-col  items-center p-0 m-0 lg:gap-0   gap-8 md:justify-start md: md:flex-row ">
        {/* Total Saved Div */}
        <div className="grid grid-cols-3 gap-2 items-center h-full   max-w-100 rounded-lg p-8 my-0  bg-beige-100 text-black">
          <IconJarFill className="row-span-2 w-12 h-12 text-green-600 stroke-green stroke-1 " />
          <div className="flex flex-col gap-2">
            <h3 className="text-xs col-start-2 min-w-max text-grey-900">Total Saved</h3>
            <p className="text-xl col-start-2 font-bold text-black-600">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
                totalSavings,
              )}
            </p>
          </div>

        </div>
        {/* Pots Div */}
        <div className="grid grid-cols-2 gap-4  ml-4 w-full">
          {pots.map((pot, index) => (
            <AmountItem
              key={pot.name}
              name={pot.name}
              amount={pot.amount}
              color={defaultColors[index]}
              noDecimals={true}
            />
          ))}
        </div>

      </div>

    </div>
  );
};