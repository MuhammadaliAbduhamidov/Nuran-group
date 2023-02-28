import React, { useState } from "react";
import FadeIn from "react-fade-in";
import img from "../assets/img/inter.png";
import arrow from "../assets/img/arrow.svg";
import { Link, useParams } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ScrollTop from "./ScrollTop";
import { useTranslation } from "react-i18next";
function IntererItem() {
  let param = useParams();
  const [modal, setModal] = useState(false);
  const [Data, setData] = useState({});
  React.useEffect(() => {
    console.log(param.id);
    fetch("https://nuron.abba.uz/api/products/" + param.id)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const lang = localStorage.getItem("lang");

  const {t} = useTranslation()

  return (
    <div>
      <ScrollTop />
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
      <div className="product">
        <Carousel>
          <div>
            <img src={ Data?.image1 } />
          </div>
          <div>
            <img  src={ Data?.image2 }  />
          </div>
          <div>
            <img  src={ Data?.image3 }  />
          </div>
        </Carousel>
        <div className="info">
          <div className="title__info">
            <h1>
              {lang === "uz"
                ? Data.name_uz
                : lang === "ru"
                ? Data.name_ru
                : Data.name_en}
            </h1>
          </div>
          <div className="body__info">
            <div className="row">
            <span>
              {lang === "uz"
                ? Data.description_uz
                : lang === "ru"
                ? Data.description_ru
                : Data.description_en}
            </span>
              <p>{Data.Blister}</p>
            </div>
          </div>
          <button onClick={() => setModal(true)}>{t("buy")}</button>
        </div>
      </div>
      {/* <div className="bottom_i_item">
        <h1>{t("poxoje")}</h1>
        <FadeIn className="body__inter">
          {[0, 1, 2].map((item) => (
            <Link to={"/interer/" + item} className="item__inter" key={item}>
              <img src={img} alt="" />
              <div className="tec">
                <div className="col">
                  <span>Лофт</span>
                  <p>х комнатная квартира3</p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </Link>
          ))}
        </FadeIn>
      </div> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default IntererItem;
