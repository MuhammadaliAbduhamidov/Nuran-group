import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import call from "../assets/img/call.svg";
import "./styles/nav.css";
import FadeIn from "react-fade-in";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Nav({ changeUzbek, changeEnglish, changeRussian, langTitle }) {

  const [active, setActive] = useState(false)

  // languages

  const [language, setLanguage] = useState(false);

  function changeHandleUzbek() {
    changeUzbek(true)
    setLanguage(!language)
  };

  function changeHandleEnglish() {
    changeEnglish(true)
    setLanguage(!language)
  }
  function changeHandleRussian() {
    changeRussian(true)
    setLanguage(!language)
  }

  const { t } = useTranslation();

  return (
    <nav>
      <FadeIn>
        <NavLink to={"/"}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
      </FadeIn>
      <FadeIn>
        <ul>
          <ul className={active && 'active col__nav' || 'col__nav'}>
            <li>
              <NavLink to={"/service"}>{t("uslugi")}</NavLink>
            </li>
            <li>
              <a href={"/#gallery"}>{t("gallery")}</a>
            </li>
            <li>
              <a href={"/#partner"}>{t("partners")}</a>
            </li>
            <li>
              <a href={"/#contact"}>{t("contacts")}</a>
            </li>
            <li>
              <div className="language">
                <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                <label htmlFor='language'>{langTitle} <i className="fa fa-angle-down"></i></label>
                <ul className={`language-menu ${!language && "d-none"}`}>
                  <li onClick={() => changeHandleUzbek()}><div className='lang-link'>UZ</div></li>
                  <li onClick={() => changeHandleEnglish()}><div className='lang-link'>ENG</div></li>
                  <li onClick={() => changeHandleRussian()}><div className='lang-link'>RU</div></li>
                </ul>
                <div className={`contrast-0 ${!language && "d-none"}`} onClick={() => setLanguage(!language)}></div>
              </div>
            </li>
          </ul>
          <div className="call">
            <img src={call} alt="" />
            <div className="n">
              <a href="tel: +998971555650">97-155-56-50</a>
              <a href="tel: +99894641400">94-641-40-00</a>
            </div>
          </div>
        </ul>
        {
          window.innerWidth < 768 && <span onClick={() => setActive(!active)}>☰</span>
        }
      </FadeIn>
      <div className={`contrast ${!active && "d-none"}`} onClick={() => setActive(!active)}></div>
    </nav>
  );
}

export default Nav;
