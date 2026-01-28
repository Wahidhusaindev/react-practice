import { useState } from "react"


const Dropdown = () => {
    const[selectedOption, setSelectedOption] =useState('Default')
    const handleOptionChange =(event)=>{
       setSelectedOption(event.target.value)
    }
  return (
     <div>
      <h1>Dropdown App</h1>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <div>
        {selectedOption === 'option1' && <p>This is content for Option 1</p>}
        {selectedOption === 'option2' && <p>This is content for Option 2</p>}
        {selectedOption === 'option3' && <p>This is content for Option 3</p>}
      </div>
    </div>
  )
}

export default Dropdown