import React, { useState } from 'react';
import { Button } from '~/components/shared/Button';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const dropdownRef = React.useRef<HTMLUListElement>(null);

  const handleChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle('hidden');
    }
  };

  const showDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle('hidden');
    }
  };

  return (
    <div className="custom-select min-w-36 relative">
      <Button variant="select" label={selectedOption || placeholder || 'Select'} type="button" onClick={showDropdown} />
      <ul ref={dropdownRef} className="custom-select-options hidden rounded-md border border-grey-900 bg-white z-10 w-full absolute top-12">
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleChange(option.value)}
            className="border-b p-4 last:border-b-0"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;