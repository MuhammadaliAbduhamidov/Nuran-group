import React, { useState, useEffect } from "react";
import Comment from "../components/Comment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderBottom from "../components/HeaderBottom";
import Nav from "../components/Nav";
import Partner from "../components/Partner";
import Trusted from "../components/Trusted";
import Sliders from "../components/Slider/Slider";
import Welcome from "../components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interers from "../components/Interers";
import IntererItem from "../components/IntererItem";
import Finishings from "../components/Finishings";
import About from "../components/About";
import Servis from "../components/Servis";
import ScrollPercent from "../components/ScrollPercent/ScrollPercent";
import ServiceItem from "../components/ServiceItem";
import { useTranslation } from "react-i18next";

function Home() {
  // languages

  const { i18n } = useTranslation();

  const [english, setEnglish] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng") == "en"
        ? true
        : false
      : false
  );
  const [russian, setRussian] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng") == "ru"
        ? true
        : false
      : false
  );
  const [uzbek, setUzbek] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng") == "uz"
        ? true
        : false
      : false
  );
  const [langTitle, setLangTitle] = useState(
    localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng").toUpperCase()
      : ""
  );

  function changeUzbek(item) {
    setUzbek(item);
    setEnglish(!item);
    setRussian(!item);
    i18n.changeLanguage("uz");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    localStorage.setItem("lang", "uz");
  }

  function changeRussian(item) {
    setUzbek(!item);
    setRussian(item);
    setEnglish(!item);
    i18n.changeLanguage("ru");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    localStorage.setItem("lang", "ru");
  }

  function changeEnglish(item) {
    setUzbek(!item);
    setEnglish(item);
    setRussian(!item);
    i18n.changeLanguage("en");
    setLangTitle(localStorage.getItem("i18nextLng").toUpperCase());
    localStorage.setItem("lang", "en");
  }

  const [welcome, setWelcome] = useState(false);
  React.useEffect(() => {
    localStorage.getItem("lang") ? setWelcome(false) : setWelcome(true);
  }, []);
  function Body() {
    const [back, setBack] = useState({});
    React.useEffect(() => {
      fetch("https://nura.admin.techdatasoft.uz/api/home/all")
        .then((response) => response.json())
        .then((json) => setBack(json));
    }, []);

    return (
      <>
        <Header
          buttonName={"перейти"}
          titleName={"интерьер и экстерьер дизайн"}
          imgName={"bg"}
        />
        <HeaderBottom />

        <div id="gallery">
          <div>
            <Sliders english={english} uzbek={uzbek} russian={russian} />
          </div>
        </div>

        {/* <div id="">
          <div>
            <Servis english={english} uzbek={uzbek} russian={russian} />
          </div>
        </div> */}

        <div id="partner">
          <div>
            <Partner data={back?.logo} />
          </div>
        </div>
        <div id="trusted">
          <div>
            <Trusted data={back?.logo} />
          </div>
        </div>
        <div>
          <Comment json={back?.comment} data={back?.link_video?.[0]} />
        </div>

        <div id="contact">
          <div>
            <Contact />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
  function Interer() {
    return <Interers />;
  }
  function Finishing() {
    return <Finishings />;
  }
  function Parts() {
    return (
      <>
        <Header
          titleName={"партнеры"}
          buttonName={"смотреть проэкты"}
          imgName={"bg bg2"}
        />
        <div style={{ marginTop: "5vw" }}></div>
        <Partner />
        <Contact />
        <Footer />
      </>
    );
  }

  return (
    <div>
      {welcome ? (
        <Welcome
          setWelcome={setWelcome}
          changeUzbek={changeUzbek}
          changeEnglish={changeEnglish}
          changeRussian={changeRussian}
        />
      ) : (
        <div className="container">
          <BrowserRouter>
            <Nav
              changeUzbek={changeUzbek}
              changeEnglish={changeEnglish}
              changeRussian={changeRussian}
              langTitle={langTitle}
            />
            <ScrollPercent />
            {/* <Header /> */}
            {/* <HeaderBottom /> */}
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/interer" element={<Interer />} />
              <Route path="/finishing" element={<Finishing />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/service"
                element={
                  <Servis english={english} uzbek={uzbek} russian={russian} />
                }
              />
              <Route path="/partners" element={<Parts />} />
              <Route path="/trusted" element={<Trusted />} />
              <Route path="/interer/:id" element={<IntererItem />} />
              <Route path="/finishing/:id" element={<IntererItem />} />
              <Route path="/service/:id" element={<ServiceItem />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default Home;
