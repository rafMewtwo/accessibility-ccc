"use client"
import { ChangeEvent, useState } from 'react';

const RadioButtonGroupAccessible = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div role="radiogroupAccessible" aria-labelledby="radio-group-label">
      <div>
        <input
          type="radio"
          id="option01"
          name="radioGroupAccessible"
          value="option01"
          checked={selectedOption === 'option01'}
          onChange={handleOptionChange}
          aria-checked={selectedOption === 'option01'}
          role="radio"
        />
        <label htmlFor="option01">Option 1</label>
      </div>

      <div>
        <input
          type="radio"
          id="option02"
          name="radioGroupAccessible"
          value="option02"
          checked={selectedOption === 'option02'}
          onChange={handleOptionChange}
          aria-checked={selectedOption === 'option02'}
          role="radio"
        />
        <label htmlFor="option02">Option 2</label>
      </div>
    </div>
  );
};

export default RadioButtonGroupAccessible;
