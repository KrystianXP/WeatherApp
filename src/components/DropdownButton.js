import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        Najedź na mnie
      </button>
      {isOpen && (
        <ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: '10px' }}>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
