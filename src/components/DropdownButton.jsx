import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className = "list-main" onClick={toggleDropdown}>
        Miejscowość
      </button>
      {isOpen && (
        <ul class="list">
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
