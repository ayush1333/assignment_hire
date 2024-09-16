import React, { useState } from 'react';

import Table from './Table';

function DropdownTable({ title, holdings }) {
  const [isOpen, setIsOpen] = useState(false);
  //this is for testing purpose
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //This is for testing 2
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
//source tree1 for testing 3

export default DropdownTable;
