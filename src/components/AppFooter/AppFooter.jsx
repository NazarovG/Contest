import React from 'react';
import './AppFooter.scss';
import Anonymex from '../UI/icons/Anonymex';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="app-footer__logo">
          <a href="/">
            <Anonymex />
          </a>
        </div>
        <div>
          <div className="app-footer__dev">
            <a href="/">
              Developed with <span className="heart">❤</span> by{' '}
              <span className="address">Anonymex.org</span>
            </a>
          </div>
          <div className="app-footer__version">
            v3 build:2018.12.20 22:59:51 | 7457
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
