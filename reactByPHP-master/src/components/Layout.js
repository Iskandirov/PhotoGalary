import React from 'react';
import NavMenu from './NavMenu';

export default props => (
    <div>
      <NavMenu />
      <div className="container">
        {props.children}
      </div>
    </div>
  );