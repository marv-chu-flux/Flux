import './footer.css';

import logo from '../images/fluxWhiteLogo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
