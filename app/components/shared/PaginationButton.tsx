import IconArrowRight from "./Icons/IconArrowRight";

export interface ButtonProps {
  /** Button variant */
  variant?: 'prev' | 'next' | 'num' ;
 num?: number;
  /** Optional click handler */
  active?: boolean;
  onClick?: () => void;
}

export const PaginationButton = ({
  variant = 'num',
  active = false,
  num,
  ...props
}: ButtonProps) => {

  const buttonClasses = `rounded-lg py-2 px-4 display-flex items-center justify-center border border-beige-500 hover:bg-grey-300  ${
    active && num ? 'bg-grey-900 text-white' : 'bg-white text-grey-900'
  }`;

  return (
    <button
      type="button"
      className={buttonClasses}
      {...props}
    >
      <span className="flex items-center justify-center">
        {variant === 'prev' && <IconArrowRight className="mr-2 rotate-180 fill-grey-500" />}
        {variant === 'num' ? num : variant.charAt(0).toUpperCase() + variant.slice(1)}
        {variant === 'next' && <IconArrowRight className="ml-2 fill-grey-500" />}
      </span>
    </button>
  );
}