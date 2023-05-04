import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Header() {
    return (
      <header>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
    </div>
  );
};

export default HomePage;

