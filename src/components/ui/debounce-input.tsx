import React, { useState, useEffect } from 'react';

// Define the props interface
interface DebounceInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
}

// Define the component using React.FC
const DebounceInput: React.FC<DebounceInputProps> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  // Sync local state with the initialValue prop
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Debounce the onChange callback
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DebounceInput;