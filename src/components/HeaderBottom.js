import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function HeaderBottom() {
  const [modal, setModal] = useState(false);
  const [vis, setVis] = useState(true);
  window.onscroll = function (e) {
    // console.log(document.body.scrollTop());
    // console.log(document.body.scrollHeight - e.path[1].scrollY);
    document.body.scrollHeight - e.path[1].scrollY > 1140
      ?  setVis(true)
      : setVis(false);
  };

  const {t} = useTranslation();

  return (
    <div className="header__bottom">
      {modal && (
        <div className="modal">
          <div className="modal__body">
            <span onClick={() => setModal(false)}>&times;</span>
            <input type="text" placeholder={`${t("number")}`} />
            <input type="text" placeholder={`${t("name")}`} />
            <button>{t("send")}</button>
          </div>
        </div>
      )}
      {vis && (
        <>
          <button className="down" onClick={() => setModal(true)}>
            {t("download")}
          </button>
          <button className="msg" onClick={() => setModal(true)}></button>
        </>
      )}
    </div>
  );
}

export default HeaderBottom;
