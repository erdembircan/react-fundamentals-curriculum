import React from 'react';
import ZipForm from './ZipForm';

function Nav(props) {
  return (
    <div className="navBar">
      <div className="navBrand">Weather App</div>
      <ZipForm style={{ flexDirection: 'row' }} />
    </div>
  );
}

export default Nav;
