import React from "react";

interface SelectDropdownProps {
  options: { value: string | number; label: string }[];
  onChange: (selectedValue: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string,
  name: string,
  label: string,
}

const Select: React.FC<SelectDropdownProps> = ({ onChange, value, name, options, label }) => {
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };

  return (
    <div>

      <label
        htmlFor="company_name"
        className="block text-sm font-medium leading-6 dark:text-gray-200 text-gray-900">
        {label}
      </label>

      <div className="mt-2">
        <select
          id={name}
          value={value ?? ""}
          onChange={handleSelectChange}
          name={name}
          className="block bg-gray-200 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 w-44 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option value="" disabled={!value}>
            Select {label}
          </option>
          {options && options?.map((option, index) => <option
            key={index}
            value={option?.value}>
            {option?.label}
          </option>
          )}
        </select>
      </div>

    </div>
  );
};

export default Select;
