"use client"
import { ChangeEvent, useState } from 'react';

const RadioButtonGroupNotAccessible = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        id="option1"
        name="radioGroup"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={handleOptionChange}
      />
      <label>Option 1</label>

      <input
        type="radio"
        id="option2"
        name="radioGroup"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={handleOptionChange}
      />
      <label>Option 2</label>
    </div>
  );
};

export default RadioButtonGroupNotAccessible;
