import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Contact from "./Contact";
import ScrollTop from './ScrollTop'
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import { useParams } from "react-router-dom";
function ServiceItem() {
  let param = useParams();
  const lang = localStorage.getItem("lang");


  const { t } = useTranslation()
  const [modal, setModal] = useState(false);
  const [serviceItem, setServiceItem] = useState([])
  const [faqs, setFaqs] = React.useState([])


  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);

  function changeName(e) {
    setNameValue(e.target.value);
    setInvalidName(false);
  }

  function changeNumber(e) {
    setNumberValue(e.target.value);
    setInvalidNumber(false);
  }

  let bot = {
    TOKEN: "6047595595:AAFdsbYxkljCSh9gAnWlB24z6pKT19uVSnM",
    chatID: "-1001890683682",
    message: `Ismi: ${nameValue}; %0ATelefon raqami: ${numberValue}.`,
  };

  function sendMessage() {
    if (numberValue === "") {
      setInvalidNumber(true);
    } else if (nameValue === "") {
      setInvalidName(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );

      setNameValue("");
      setNumberValue("");
    }
  }


  React.useEffect(() => {
    fetch('https://nuron.abba.uz/api/service/' + param.id)
      .then(res => res.json())
      .then(data => setServiceItem(data))
      .catch(err => console.log(err))
    // F.A.Q
    fetch('https://nuron.abba.uz/api/faqs/')
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch(err => console.log(err))
  }, [])




  return (
    <div>
      <ScrollTop />
      <div className="about">
        {modal && (
          <div className="modal">
            <div className="modal__body">
              <span onClick={() => setModal(false)}>&times;</span>
              <form action="">
                <div className="item__input" onChange={(e) => changeNumber(e)}>
                  <p>{t("number")}</p>
                  <PhoneInput
                    country={"uz"}
                    value={numberValue}
                    className={`form-controls ${invalidNumber && "red-line"}`}
                  />
                </div>
                <div className="item__input">
                  <p>{t("name")}</p>
                  <input type="text" name="" id="" className={`form-controls ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e)} />
                </div>
                <button type="button" onClick={() => sendMessage()}>{t("send")}</button>
              </form>
            </div>
          </div>
        )}
        <div className="header__about">
          <img
            src={serviceItem.image}
            alt=""
          />
          <div className="txt__about">
            <h1 style={{ fontSize: "2.3vw", width: "60%" }}>
              <span> {lang === "uz"
                ? serviceItem.name_uz
                : lang === "ru"
                  ? serviceItem.name_ru
                  : serviceItem.name_en} </span>
            </h1>
            <p>
              {
                lang === "uz"
                  ? serviceItem.description_uz
                  : lang === "ru"
                    ? serviceItem.description_ru
                    : serviceItem.description_en
              }
            </p>
            <button className="btn__ab" style={{ cursor: 'pointer' }} onClick={() => setModal(true)} >{t("buy")}</button>
          </div>
        </div>
        <div className="center">
          <h1>
            <span>{t("better")}</span>
          </h1>
        </div>
        <div className="center">
          <div className="faq center" style={{ width: "100%" }}>
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
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default ServiceItem;
