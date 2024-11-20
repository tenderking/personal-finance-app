import React, { useState, forwardRef } from 'react';

interface CustomInputProps {
  leftIcons?: React.ElementType[];
  rightIcon?: React.ElementType | null;
  placeholder?: string;
  label: string;
  name?: string;
  helperText?: string | null;
  value?: string;
  inputType: "text" | "email" | "password" | "number";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const BaseField = forwardRef<HTMLInputElement, CustomInputProps>(({
  leftIcons = [],
  rightIcon = null,
  placeholder = 'Placeholder',
  label = 'Label',
  helperText,
  inputType = 'text',
  name,
  onChange
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-col w-full">
      {/* Label */}
      <label className="font-bold text-sm mb-1 text-grey-500">{label}</label>

      <div
        className={`flex items-center border ${isFocused ? 'border-2 border-grey-900' : 'border border-beige-500'
          } rounded-lg px-3 py-2 w-full transition-colors`}
      >
        {/* Left Icons */}
        <div className="flex items-center space-x-2">
          {leftIcons.map((Icon, index) => (
            <Icon key={index} className="w-5 h-5 text-green-600" />
          ))}
        </div>

        {/* Input Field */}
        <input
          type={inputType}
          name={name}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (onChange) onChange(e);
          }}
          placeholder={placeholder}
          className="flex-grow bg-transparent outline-none px-2 text-grey-900 placeholder-beige-500"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          inputMode='text'
          ref={ref}
        />

        {/* Right Icon */}
        {rightIcon &&
          React.createElement(rightIcon, { className: "w-5 h-5 text-grey-600" })
        }
      </div>

      {/* Helper Text */}
      {helperText && <span className="text-xs italic text-grey-500 mt-1 self-end">{helperText}</span>}
    </div>
  );
});


export default BaseField;
