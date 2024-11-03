import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className = "list" onClick={toggleDropdown}>
        Miejscowość
      </button>
      {isOpen && (
        <ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: '10px' }}>
          <li>Warszawa</li>
          <li>Wrocław</li>
          <li>Poznań</li>
          <li>Kraków</li>
          <li>Gdańsk</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
