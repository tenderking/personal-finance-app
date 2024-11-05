import IconArrowRight from "./Icons/IconArrowRight";

export interface ButtonProps {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destroy';
  /** What background color to use */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  label,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-grey-900 hover:bg-grey-300 text-white',
    secondary: 'bg-beige-100 hover:bg-white text-black border border-grey-900',
    tertiary: 'bg-none text-grey-500 hover:text-grey-900 fill-grey-500 hover:fill-grey-900',
    destroy: 'bg-red hover:bg-red-200 text-white',
  };

  return (
    <button
      type="button"
      className={`rounded-lg py-2 px-4 ${variantClasses[variant]} display-flex items-center justify-center`}
      {...props}
    >
      <span className="flex items-center justify-center">

        {label}
        {variant === 'tertiary' && <IconArrowRight className="ml-2 0" />}
      </span>
    </button>
  );
};
