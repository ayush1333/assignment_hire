import React, { useState } from 'react';

import Table from './Table';

function DropdownTable({ title, holdings }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <div className='table-header' onClick={toggleDropdown}>
        <div className={`arrow ${isOpen ? 'rotated' : ''}`}>&#9660;</div>
        <h3>
          {title} ({holdings.length})
        </h3>
      </div>
      {isOpen && <Table holdings={holdings} />}
    </div>
  );
}

export default DropdownTable;
