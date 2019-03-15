import React, { Component } from 'react';
import logo from '../../logo.svg';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src={logo} alt="header-logo" className="header-logo" />
          <ul className="header-nav">
            <li className="header-nav__item">
              <a className="header-nav__link" href="https://google.com">Home</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;