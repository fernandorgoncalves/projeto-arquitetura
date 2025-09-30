import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import BrazilIcon from "../../assets/brasil-icon.svg";
import UsaIcon from "../../assets/usa-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import Logo from "../../assets/logo.svg";

import Button from "../Button/Button";
//Context
import { AppContext } from "../../context/AppContext";

function Footer() {
  const appContext = useContext(AppContext);
  const changeLanguage = (country) => {
    appContext.setLanguage(country);
  };

  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between mobile-fd-collumn">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" height={'150px'} />
            <p className="grey-1-color">
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="#" target="_blank">
                <img src={FacebookIcon} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={TwitterIcon} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={InstagramIcon} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={LinkedinIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="d-flex mobile-fd-collumn">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
                <li>
                  <Link to={"/"}>
                    {appContext.languages[appContext.language].menu.home}
                  </Link>
                </li>
                <li>
                  <Link to={"/about"}>
                    {appContext.languages[appContext.language].menu.about}
                  </Link>
                </li>
                <li>
                  <Link to={"/projects"}>
                    {appContext.languages[appContext.language].menu.projects}
                  </Link>
                </li>
                <li>
                  <Link to={"/contacts"}>
                    {appContext.languages[appContext.language].menu.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].menu.contact}</h3>
              <p className="grey-1-color">
                R. de cima, 61 – Jardim Bairro | São Paulo – SP | CEP
                02234-001{" "}
              </p>
              <p className="grey-1-color">fernandorgoncalves@hotmail.com</p>
              <p className="grey-1-color">(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-1-color">Copyright © FernadoArq- 2025</p>
          <div className="langs-area d-flex">
            <Button buttonStyle="unstyled" onClick={() => changeLanguage("br")}>
              <img src={BrazilIcon} height="29px" />
            </Button>
            <Button buttonStyle="unstyled" onClick={() => changeLanguage("en")}>
              <img src={UsaIcon} height="29px" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
