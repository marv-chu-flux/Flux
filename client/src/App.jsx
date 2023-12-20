// import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';


function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"shop"}>Shop</Link>
            </li>
            <li>
              <img id="logo" src={logo} alt="Flux Logo" />
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
}

export default App;
