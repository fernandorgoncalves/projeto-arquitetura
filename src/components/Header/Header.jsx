import { Link } from "react-router-dom";
import Button from '../Button/Button'

import "./Header.css";
import Logo from "../../assets/dnc-logo.svg";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-between">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          <div className="mobile-menu">
              <Button buttonStyle="secondary">
                Menu
              </Button>
          </div>

          <nav>
            <ul className="d-flex">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link to={"/contacts"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
