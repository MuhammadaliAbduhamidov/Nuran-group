import React, { useState } from "react";
import "../components/styles/inter.css";
import img from "../assets/img/inter.png";
import img1 from "../assets/img/inter2.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import arrow from "../assets/img/arrow.svg";
import refresh from "../assets/img/refresh.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";
import { useTranslation } from "react-i18next";
function Interers() {
  const lang = localStorage.getItem("lang");
  const [tab, setTab] = React.useState(0);
  const [inter, setInter] = React.useState([]);
  const [ekster, setEkster] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://nuron.abba.uz/api/products/"
    )
      .then((response) => response.json())
      .then((json) => setInter(json));
    fetch(
      "https://nuron.abba.uz/api/products/"
    )
      .then((response) => response.json())
      .then((json) => setEkster(json));
  }, []);

  const { t } = useTranslation()

  const [prodIndex, setProdIndex] = useState(6)
  const [prodIndex1, setProdIndex1] = useState(6)

  return (
    <div>
      <HeaderBottom />
      <div className="header__inter">
        <button className={tab == 0 && "active"} onClick={() => setTab(0)}>
          {t("inter")}{" "}
        </button>
        <button className={tab == 1 && "active"} onClick={() => setTab(1)}>
          {t("ekstr")}{" "}
        </button>
      </div>
      {tab === 0 ? (
        <FadeIn className="body__inter">
          {inter.filter((c) => c.category == 1).slice(0, prodIndex).map((item) => (
            <Link to={"./" + item.id} className="item__inter" key={item.id}>
              <img
                src={item.image1}
                alt=""
              />
              <div className="tec">
                <div className="col">
                  <span>
                    {" "}
                    {lang === "uz"
                      ? item.name_uz
                      : lang === "ru"
                        ? item.name_ru
                        : item.name_en}
                  </span>
                  <p>
                    {lang === "uz"
                      ? item.description_uz.slice(0, 70)
                      : lang === "ru"
                        ? item.description_ru.slice(0, 70)
                        : item.description_en.slice(0, 70)}...
                  </p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </Link>
          ))}
        </FadeIn>
      ) : (
        <FadeIn className="body__inter">
          {ekster.filter((c) => c.category == 2).slice(0, prodIndex1).map((item) => (
            <Link to={"./" + item.id} className="item__inter" key={item.id}>
              <img
                src={item.image1}
                alt=""
              />
              <div className="tec">
                <div className="col">
                  <span>
                    {" "}
                    {lang === "uz"
                      ? item.name_uz
                      : lang === "ru"
                        ? item.name_ru
                        : item.name_en}
                  </span>
                  <p>
                    {lang === "uz"
                      ? item.description_uz.slice(0, 70)
                      : lang === "ru"
                        ? item.description_ru.slice(0, 70)
                        : item.description_en.slice(0, 70)}...
                  </p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </Link>
          ))}
        </FadeIn>
      )}
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="center">
        {tab == 0 &&
          <button className="more" onClick={() => setProdIndex(inter.filter((c) => c.category == 1).length)}>
            <img src={refresh} alt="" />
            {t("see")}
          </button>
        }
        {tab == 1 &&
          <button className="more" onClick={() => setProdIndex1(ekster.filter((c) => c.category == 2).length)}>
            <img src={refresh} alt="" />
            {t("see")}
          </button>
        }
      </div>
      {/* <div className="interer__iframe">
        <iframe
          src="https://www.youtube.com/embed/N4YiAKTZVjI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
      <Footer />
    </div>
  );
}

export default Interers;
