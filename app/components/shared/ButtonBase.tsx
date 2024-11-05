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
    primary: 'bg-gray-900 hover:bg-gray-300 text-white',
    secondary: 'bg-stone-100 hover:bg-white text-black border border-gray-900',
    tertiary: 'bg-none text-gray-500 hover:text-gray-900 fill-gray-500 hover:fill-gray-900',
    destroy: 'bg-red-500 hover:bg-red-200 text-white',
  };

  return (
    <button
      type="button"
      className={`rounded py-2 px-4 ${variantClasses[variant]} display-flex items-center justify-center`}
      {...props}
    >
      <span className="flex items-center justify-center">

        {label}
        {variant === 'tertiary' && <IconArrowRight className="ml-2 0" />}
      </span>
    </button>
  );
};
