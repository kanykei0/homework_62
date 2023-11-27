import { NavLink } from "react-router-dom";
import LOGO from "../../assets/ufo.png";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={LOGO} alt="Product" className="ufo-logo" />
          UFO's
        </a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-reset">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link text-reset">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link text-reset">
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link text-reset">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
