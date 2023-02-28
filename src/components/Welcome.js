import React from "react";
import logo from "../assets/img/logo.png";
import youtube from "../assets/img/youtube.svg";
import telegram from "../assets/img/telegram.svg";
import instagram from "../assets/img/instagram.svg";
import facebook from "../assets/img/facebook.svg";
import call from "../assets/img/call.svg";
import { Context } from "./Wrapper";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useTranslation } from "react-i18next";
function Welcome({ changeUzbek, changeEnglish, changeRussian, setWelcome }) {

  const context = React.useContext(Context);

  function changeHandleUzbek() {
    changeUzbek(true)
    setWelcome(false)
  };

  function changeHandleEnglish() {
    changeEnglish(true)
    setWelcome(false)
  }
  function changeHandleRussian() {
    changeRussian(true)
    setWelcome(false)
  };

  const { t } = useTranslation();

  return (
    <div className="welcome">
      <div className="logo">
        <img src={logo} className='logo_img' alt="" />
        <p>
          {/* Добро пожаловать в <span>Nuran Group</span> */}
          {t("hello")}
        </p>
        <p>{t("languages")}</p>
        <FadeIn className="row__setlang">
          <button
            value={"uz"}
            onClick={() => changeHandleUzbek()}
            onMouseEnter={context.selectLanguage}
          >
            UZ
          </button>
          <button
            value={"ru"}
            onClick={() => changeHandleRussian()}
            onMouseEnter={context.selectLanguage}
          >
            RU
          </button>
          <button
            value={"en"}
            onClick={() => changeHandleEnglish()}
            onMouseEnter={context.selectLanguage}
          >
            ENG
          </button>
        </FadeIn>
        <FadeIn className="row__social">
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={telegram} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </FadeIn>
      </div>
      <div className="call">
        <img src={call} alt="" />
        <div className="n">
          <a href="tel: +99897-155-56-50">97-155-56-50</a>
          <a href="tel: +99894-641-40-00">94-641-40-00</a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
