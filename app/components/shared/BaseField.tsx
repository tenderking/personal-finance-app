import React, { useState } from 'react';

interface CustomInputProps {
  leftIcons?: React.ElementType[];
  rightIcon?: React.ElementType | null;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const BaseField: React.FC<CustomInputProps> = ({
  leftIcons = [],
  rightIcon = null,
  placeholder = 'Placeholder',
  value = '',
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Label */}
      <label className="font-bold text-sm mb-1 text-grey-500">Label</label>

      <div
      className={`flex items-center border ${
        isFocused ? 'border-2 border-grey-900' : 'border border-beige-500'
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
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none px-2 text-grey-900 placeholder-beige-500"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Right Icon */}
      {rightIcon && 
        React.createElement(rightIcon, { className: "w-5 h-5 text-gray-600" })
      }
      </div>

      {/* Helper Text */}
      <span className="text-xs italic text-grey-500 mt-1 self-end">Helper text</span>
    </div>
  );
};


export default BaseField;
