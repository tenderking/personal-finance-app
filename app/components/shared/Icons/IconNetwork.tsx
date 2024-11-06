import React from 'react';

interface IconNetworkProps {
  className?: string;
}

const IconNetwork: React.FC<IconNetworkProps> = ({ className }) => {
  return (
    <svg
      className={className}
 width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.5C15 7.63261 14.9473 7.75979 14.8536 7.85355C14.7598 7.94732 14.6326 8 14.5 8H12.5V10H13C13.2652 10 13.5196 10.1054 13.7071 10.2929C13.8946 10.4804 14 10.7348 14 11V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H11C10.7348 14 10.4804 13.8946 10.2929 13.7071C10.1054 13.5196 10 13.2652 10 13V11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10H11.5V8H4.5V10H5C5.26522 10 5.51957 10.1054 5.70711 10.2929C5.89464 10.4804 6 10.7348 6 11V13C6 13.2652 5.89464 13.5196 5.70711 13.7071C5.51957 13.8946 5.26522 14 5 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V11C2 10.7348 2.10536 10.4804 2.29289 10.2929C2.48043 10.1054 2.73478 10 3 10H3.5V8H1.5C1.36739 8 1.24021 7.94732 1.14645 7.85355C1.05268 7.75979 1 7.63261 1 7.5C1 7.36739 1.05268 7.24021 1.14645 7.14645C1.24021 7.05268 1.36739 7 1.5 7H7.5V5.5H7C6.73478 5.5 6.48043 5.39464 6.29289 5.20711C6.10536 5.01957 6 4.76522 6 4.5V2.5C6 2.23478 6.10536 1.98043 6.29289 1.79289C6.48043 1.60536 6.73478 1.5 7 1.5H9C9.26522 1.5 9.51957 1.60536 9.70711 1.79289C9.89464 1.98043 10 2.23478 10 2.5V4.5C10 4.76522 9.89464 5.01957 9.70711 5.20711C9.51957 5.39464 9.26522 5.5 9 5.5H8.5V7H14.5C14.6326 7 14.7598 7.05268 14.8536 7.14645C14.9473 7.24021 15 7.36739 15 7.5Z" />
</svg>

  );
};

export default IconNetwork;
