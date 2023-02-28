import React, { useState } from "react";
import Footer from "./Footer";
import "./styles/about.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ScrollAdd from "./ScrollAdd";
import HeaderBottom from "./HeaderBottom";
import { useTranslation } from "react-i18next";
function About() {
  const lang = localStorage.getItem("lang");
  const [faqs, setFaqs] = React.useState([])
  const { t } = useTranslation();

  React.useEffect(() => {
    fetch('https://nuron.abba.uz/api/faqs/')
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch(err => console.log(err))
  })


  return (
    <>
      <HeaderBottom />
      <div className="about" style={{ marginTop: "4vw" }}>
        <div
          className="header__about"
        >
          <iframe
            src="https://www.youtube.com/embed/SHUJ_qZKo_I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="txt__about">
            <h1>
              {t("about")} <br />
              <span> nuran group </span>
            </h1>
            <p>{t("about_us")}</p>
          </div>
        </div>
        <div
          className="static"
        >
          <div className="static__item">
            <h1>20+</h1>
            <small>Tajriba</small>
          </div>
          <div className="static__item">
            <h1>250+</h1>
            <small>Mutaxassis</small>
          </div>
          <div className="static__item">
            <h1>2000+</h1>
            <small>Loyiha</small>
          </div>
          <div className="static__item">
            <h1>150+</h1>
            <small>Minnatdor mijos</small>
          </div>
        </div>
        <div>
          <div className="faq">
            <h1>
              {/* часто задаваемые <span>вопросы</span> */}
              {t("faq")}
            </h1>

            <Accordion allowZeroExpanded>
              {
                faqs?.map((item) => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {lang === "uz"
                          ? item.question_uz
                          : lang === "ru"
                            ? item.question_ru
                            : item.question_en}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <iframe
                        src={item.answer_uz}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
