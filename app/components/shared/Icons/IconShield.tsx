import React from 'react';

interface IconShieldProps {
  className?: string;
}

const IconShield: React.FC<IconShieldProps> = ({ className }) => {
  return (
    <svg
      className={className}
     width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2.5H3C2.73478 2.5 2.48043 2.60536 2.29289 2.79289C2.10536 2.98043 2 3.23478 2 3.5V7C2 10.295 3.595 12.2919 4.93313 13.3869C6.37437 14.5656 7.80813 14.9663 7.87063 14.9825C7.95656 15.0059 8.04719 15.0059 8.13313 14.9825C8.19563 14.9663 9.6275 14.5656 11.0706 13.3869C12.405 12.2919 14 10.295 14 7V3.5C14 3.23478 13.8946 2.98043 13.7071 2.79289C13.5196 2.60536 13.2652 2.5 13 2.5ZM10 8.5H8.5V10C8.5 10.1326 8.44732 10.2598 8.35355 10.3536C8.25979 10.4473 8.13261 10.5 8 10.5C7.86739 10.5 7.74021 10.4473 7.64645 10.3536C7.55268 10.2598 7.5 10.1326 7.5 10V8.5H6C5.86739 8.5 5.74021 8.44732 5.64645 8.35355C5.55268 8.25979 5.5 8.13261 5.5 8C5.5 7.86739 5.55268 7.74021 5.64645 7.64645C5.74021 7.55268 5.86739 7.5 6 7.5H7.5V6C7.5 5.86739 7.55268 5.74021 7.64645 5.64645C7.74021 5.55268 7.86739 5.5 8 5.5C8.13261 5.5 8.25979 5.55268 8.35355 5.64645C8.44732 5.74021 8.5 5.86739 8.5 6V7.5H10C10.1326 7.5 10.2598 7.55268 10.3536 7.64645C10.4473 7.74021 10.5 7.86739 10.5 8C10.5 8.13261 10.4473 8.25979 10.3536 8.35355C10.2598 8.44732 10.1326 8.5 10 8.5Z" />
</svg>

  );
};

export default IconShield;