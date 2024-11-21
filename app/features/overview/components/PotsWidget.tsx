import { Button } from "~/components/shared/Button";
import { BrowserRouter as Router } from 'react-router-dom';
import IconJarFill from "~/components/shared/Icons/IconJarFill";

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
  const defaultColors = ['bg-green', 'bg-cyan', 'bg-navy', 'bg-yellow']
  return (
    <Router>
      <div className="flex flex-col gap-4 items-center justify-center rounded-lg p-4 bg-white text-black">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl  font-bold text-grey-900">Pots</h3>
          <Button label="See details" variant="tertiary" type="link" href={seeDetailsUrl} />
        </div>
        <div className="flex flex-col items-center  gap-4 justify-start  md:flex-row ">

          <div className="grid grid-cols-3 gap-2 items-center w-100 rounded-lg p-4 bg-beige-100 text-black h-max">
            <IconJarFill className="row-span-2 w-12 h-12 text-green-600 stroke-green stroke-1 " />
            <div className="flex flex-col gap-2">

              <h3 className="text-xs col-start-2 min-w-max text-grey-900">Total Saved</h3>
              <p className="text-xl col-start-2 font-bold text-black-600">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
                totalSavings,
              )}
              </p>
            </div>

          </div>

          <div className="mr-auto grid grid-cols-2 gap-2 mt-4">
            {pots.map((pot, index) => (
              <div key={pot.name} className={`relative  flex flex-col  gap-2 items-start justify-center  p-2 text-black`}>
                <div className={`absolute inset-y-0 left-0 w-2 ${defaultColors[index]} rounded-full`}></div>
                <h3 className="text-xs min-w-max text-grey-500 ml-4">{pot.name}</h3>
                <p className="text-lg font-bold text-black-600 ml-4">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(pot.amount)}</p>
              </div>
            )
            )}
          </div>
        </div>

      </div>
    </Router>
  );
};