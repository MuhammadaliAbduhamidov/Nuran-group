import React from "react";
import logo from "../assets/img/logo.png";
import "./styles/footer.css";
import abba1 from "../assets/img/abba1.svg";
import abba2 from "../assets/img/abba2.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer() {

  const {t} = useTranslation();

  return (
    <div>
      <footer>
        <div className="footer__item">
          <img src={logo} alt="" />
          <b className="slogon">{t(`luxury`)} </b>
          <p>{t("home")}</p>
        </div>
        <div className="footer__item">
          <a href="/#gallery">{t("gallery")}</a>
          <a href="/#partner">{t("partners")}</a>
          <a href="/#contact">{t("contacts")}</a>
          <Link to="/about">{t("about")}</Link>
        </div>
        <div className="footer__item">
          <Link to="/interer">{t("interyer")}</Link>
          <Link to="/finishing">{t("otdelka")}</Link>
          <Link to="/about">{t("about")}</Link>
          <Link to="/service">{t("uslugi")}</Link>
        </div>
        <div className="footer__item four">
          <span href="/">{t("adres")}:</span>
          <a href="/">{t("location")}</a>
          <span href="/">{t("phone")}:</span>
          <a href="tel:+998971555650">97-155-56-50</a>
          <a href="tel:+998946414000">94-641-40-00</a>
        </div>
      </footer>
      <div className="fixed">
        <div className="container">
          <div className="footer__bottom">
            <p>{t("all")}</p>
            <div className="row">
              <p>{t("development")}</p>
              <div>
                <img src={abba1} alt="" />
                <img src={abba2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
