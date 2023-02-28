import React from "react";
import "../components/styles/inter.css";
import img from "../assets/img/inter.png";
import img1 from "../assets/img/inter2.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import arrow from "../assets/img/arrow.svg";
import refresh from "../assets/img/refresh.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollAdd from "./ScrollAdd";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
import { useTranslation } from "react-i18next";
function Finishings() {
  const [tab, setTab] = React.useState(0);
  const [Finishing, setFinishing] = React.useState([]);
  const [Construction, setConstruction] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://nuron.abba.uz/api/products/"
    )
      .then((response) => response.json())
      .then((json) => setFinishing(json));
    fetch(
      "https://nuron.abba.uz/api/products/"
    )
      .then((response) => response.json())
      .then((json) => setConstruction(json));
  }, []);
  const lang = localStorage.getItem("lang");

  const { t } = useTranslation();

  return (
    <div>
      <HeaderBottom />
      <div className="header__inter">
        <button className={tab == 0 && "active"} onClick={() => setTab(0)}>
        {t("otdel")}
        </button>
        <button className={tab == 1 && "active"} onClick={() => setTab(1)}>
        {t("CТРОИТЕЛ")}
        </button>
      </div>
      {tab === 0 ? (
        <FadeIn className="body__inter">
          {/* {Finishing?.map((item) => (
            <Link to={"./" + item.id} className="item__inter" key={item.id}>
              <img
                // src={"https://nura.admin.techdatasoft.uz/cover/" + item.cover}
                alt=""
              />
              <div className="tec">
                <div className="col">
                  <span>
                    {" "}
                    {lang === "uz"
                      ? item.Title_uz
                      : lang === "ru"
                      ? item.Title_ru
                      : item.Title_en}
                  </span>
                  <p>
                    {lang === "uz"
                      ? item.Volt_uz
                      : lang === "ru"
                      ? item.Volt_ru
                      : item.Volt_en}
                  </p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </Link>
          ))} */}
          {Finishing.filter((c) => c.category == 4).map((item) => (
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
          {Finishing.filter((c) => c.category == 3).map((item) => (
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
      <div className="center">
        <button className="more">
          <img src={refresh} alt="" />
          {t("see")}
        </button>
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

export default Finishings;
