import React, { useState } from "react";
import partner from "../assets/img/partner.svg";
import "./styles/contact.css";
import opa from "../assets/img/opa.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();

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

  return (
    <div className="contact">
      <div className="contact__body">
        <div className="title__partner">
          <img src={partner} alt="" />
          {t("call_us")}
        </div>
        <div className="row__contact">
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
          <div className="img">
            <img src={opa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
