import { useMediaQuery } from 'react-responsive';
import { Sidebar } from './Sidebar';  // Desktop Sidebar
import { SidebarTabletMobile } from './SidebarTabletMobile';  // Tablet and Mobile Sidebar

export const ResponsiveSidebar = () => {
  // Define breakpoints, for example, 768px for tablet/mobile and above for desktop
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div >
      {isDesktop ? <Sidebar /> : <SidebarTabletMobile />}
    </div>
  );
};
