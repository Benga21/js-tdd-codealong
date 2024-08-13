import React, { useState } from 'react';
import { currentAgeForBirthYear } from './utils.js'; 

function App() {
  const [birthYear, setBirthYear] = useState(''); 
  const [age, setAge] = useState(null); 
  const handleInputChange = (event) => {
    setBirthYear(event.target.value);
  };

  
  const calculateAge = () => {
    const year = parseInt(birthYear, 10);
    if (!isNaN(year)) {
      setAge(currentAgeForBirthYear(year)); 
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <input
        type="number"
        value={birthYear}
        onChange={handleInputChange}
        placeholder="Enter your birth year"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <p>Your age is: {age}</p>
      )}
    </div>
  );
}

export default App;
