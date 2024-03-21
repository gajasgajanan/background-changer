import React, { useState } from 'react';

const BackgroundChanger = () => {

  const colors = ['Red', 'Blue', 'Green', 'Orange','Yellow','Grey'];


  const [selectedColor, setSelectedColor] = useState('Black'); 

  // Function to handle color change
  const handleChangeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ backgroundColor: selectedColor, minHeight: '100vh', minWidth: '100vw', padding: '20px' }}>
      <h1>Background Changer</h1>
      {/* Render color buttons */}
      {colors.map((color, index) => (
        <button key={index} onClick={() => handleChangeColor(color)} style={{ backgroundColor: color, marginRight: '10px' }}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default BackgroundChanger;
