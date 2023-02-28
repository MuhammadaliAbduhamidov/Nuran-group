import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import img from "../assets/img/5.png"
const lang = localStorage.getItem("lang");

function Servis({uzbek, russian, english}) {
  const [service, setservice] = useState([]);
  React.useEffect(() => {
    fetch("https://nuron.abba.uz/api/service/")
      .then((response) => response.json())
      .then((json) => setservice(json));
  }, []);
  return (
    <div>
      <ScrollTop />
      <div className="about">
        {service.map((data) => (
          <Link to={`/service/${data.id}`} key={data}>
            <div
              className="header__about"
              key={data}
            >
              <img
                src={img}
                alt=""
              />
              <div className="txt__about">
                <br />
                <br />
                <h1>
                  <span> {uzbek
                    ? data.name_uz
                    : russian
                      ? data.name_ru
                      : data.name_en} </span>
                </h1>
                <p>
                  {uzbek
                    ? data.description_uz
                    : russian
                      ? data.description_ru
                      : data.description_en}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Servis;
