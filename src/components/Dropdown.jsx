import { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Default");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionContent = {
    option1: "This is content for Option 1",
    option2: "This is content for Option 2",
    option3: "This is content for Option 3",
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Dropdown App</h1>

      <label className="flex flex-col gap-2">
        Select an option:
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="border rounded px-3 py-2"
        >
          <option value="Default">Default</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>

      <div className="mt-4 text-gray-700">
        {selectedOption !== "Default" && <p>{optionContent[selectedOption]}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
