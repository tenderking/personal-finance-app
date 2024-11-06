import { Link } from 'react-router-dom';
import IconHouse from '../shared/Icons/IconHouse';
import IconArrowDownUp from '../shared/Icons/IconArrowDownUp';
import IconDonut from '../shared/Icons/IconDonut';
import IconJarFill from '../shared/Icons/IconJarFill';
import IconArrowFatLeft from '../shared/Icons/IconArrowFatLeft';
import { useState } from 'react';
import IconReceipt from '../shared/Icons/IconReceipt';

const menuItems = [
  { icon: IconHouse, label: 'Overview', link: '/overview' },
  { icon: IconArrowDownUp, label: 'Transactions', link: '/transactions' },
  { icon: IconDonut, label: 'Budgets', link: '/budgets' },
  { icon: IconJarFill, label: 'Pots', link: '/reports' },
  { icon: IconReceipt, label: 'Recurring bills', link: '/settings' },
];

export const Sidebar = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className={`sidebar ${minimized ? 'minimized p-8' : 'pr-32 pl-8 py-8'} bg-grey-900 rounded-r-2xl text-grey-300 flex flex-col outline-white justify-between max-w-fit h-screen `}>
      <div className="logo-container mb-4">

        {minimized ? (
          <img src="/logo-small.svg" alt="Logo Small" />
        ) : (
          <img src="/logo-large.svg" alt="Logo Large" />
        )}
      </div>
      <nav> {/* Use <nav> for better semantics */}
        <ul className="flex flex-col space-y-4 mb-4"> 
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center   text-grey-300 hover:text-grey-100 fill-grey-300 hover:fill-grey-100"> 
              <Link to={item.link} className="flex items-center fill-inherit"> {/* Wrap icon and label in Link */}
                <item.icon className="mr-2 0 fill-current"  /> 
                {!minimized && item.label} 
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setMinimized(!minimized)}
        onKeyDown={(e) => { if (e.key === 'Enter') setMinimized(!minimized); }}
        aria-label={minimized ? "Expand Menu" : "Minimize Menu"}
        className="sidebar-toggle-button flex items-center gap-2 text-grey-300 hover:text-grey-100 fill-grey-300 hover:fill-grey-100" 
      >
        <IconArrowFatLeft className={`transition-transform ${minimized ? 'rotate-180' : ''}`} />
        {!minimized && <span>Minimize Menu</span>}
      </button>
    </div>
  );
};