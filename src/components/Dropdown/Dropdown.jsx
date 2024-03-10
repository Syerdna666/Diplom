import React, { useState } from 'react';
import { portfolioDropdown } from '../NavItems';
import { Link } from 'react-router-dom';
import './Dropdown.scss'



function Dropdown() {
  const [dropdown, setDropdown] = useState(false);


  return (
    <>
      <ul className={dropdown ? "submenu__items clicked" : "submenu__items"} onClick={() => setDropdown(!dropdown)}>
        {portfolioDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}


export default Dropdown;