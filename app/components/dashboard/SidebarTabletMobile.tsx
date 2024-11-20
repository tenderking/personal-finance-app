import { NavLink } from 'react-router-dom';
import IconHouse from '../shared/Icons/IconHouse';
import IconArrowDownUp from '../shared/Icons/IconArrowDownUp';
import IconDonut from '../shared/Icons/IconDonut';
import IconJarFill from '../shared/Icons/IconJarFill';
import IconReceipt from '../shared/Icons/IconReceipt';


const menuItems = [
  { icon: IconHouse, label: 'Overview', link: '/' },
  { icon: IconArrowDownUp, label: 'Transactions', link: '/transactions' },
  { icon: IconDonut, label: 'Budgets', link: '/budgets' },
  { icon: IconJarFill, label: 'Pots', link: '/pots' },
  { icon: IconReceipt, label: 'Recurring bills', link: '/recurring_bills' },
];


export const SidebarTabletMobile = () => {
  return (
    <div className="bg-grey-900 rounded-t-lg p-8 w-screen">
      <ul className="flex gap-4 p-4 bg-none w-full justify-between">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center text-grey-300 hover:text-grey-100">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs p-2 border-b-2 border-transparent hover:border-green-500 ${
                  isActive ? 'bg-white   rounded-t-md border-b-green border-b-4' : ''
                }`
              }
            >

              <item.icon className="fill-current" />
              <span className="md:inline  hidden">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

