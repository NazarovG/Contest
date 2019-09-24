import React from 'react';
import Logo from '../UI/Logo/Logo';
import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default AppHeader;
