import React from 'react';

interface IconArrowDownProps {
  className?: string;
}

const IconArrowDown: React.FC<IconArrowDownProps> = ({ className }) => {
  return (
<svg  className={className}
width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3538 6.35375L8.35378 11.3538C8.30734 11.4002 8.2522 11.4371 8.1915 11.4623C8.1308 11.4874 8.06574 11.5004 8.00003 11.5004C7.93432 11.5004 7.86926 11.4874 7.80856 11.4623C7.74786 11.4371 7.69271 11.4002 7.64628 11.3538L2.64628 6.35375C2.57627 6.28382 2.52859 6.1947 2.50926 6.09765C2.48994 6.00061 2.49984 5.90002 2.53772 5.8086C2.57559 5.71719 2.63974 5.63908 2.72204 5.58414C2.80433 5.5292 2.90108 5.49992 3.00003 5.5H13C13.099 5.49992 13.1957 5.5292 13.278 5.58414C13.3603 5.63908 13.4245 5.71719 13.4623 5.8086C13.5002 5.90002 13.5101 6.00061 13.4908 6.09765C13.4715 6.1947 13.4238 6.28382 13.3538 6.35375Z" />
</svg>

  );
};

export default IconArrowDown;