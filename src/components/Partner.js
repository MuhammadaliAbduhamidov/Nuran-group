import React from "react";
import partner from "../assets/img/partner.svg";
import FadeIn from "react-fade-in/lib/FadeIn";
import "../components/styles/partner.css";
import img1 from "../assets/img/imag1.png";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.JPG";
import img6 from "../assets/img/img6.JPG";
import img7 from "../assets/img/img7.png";
import { useTranslation } from "react-i18next";


function Partner({ data }) {
  const url = 'https://nura.admin.techdatasoft.uz/images/'

  const { t } = useTranslation();

  return (
    <div>

      <div className="title__partner">
        <img src={partner} alt="" />
        {t("partners")}
      </div>
      <FadeIn className="body__partner">
        {/* {data?.map((item) => ( */}
        <div className="item__partner" key={'item'}>
          <img src={img1} alt="" />
        </div>
        <div className="item__partner" key={'item'}>
          <img src={img2} alt="" />
        </div>
        <div className="item__partner" key={'item'}>
          <img src={img3} alt="" />
        </div>
        <div className="item__partner" key={'item'}>
          <img src={img4} alt="" />
        </div>
        <div className="item__partner" key={'item'}>
          <img src={img5} alt="" />
        </div>
        <div className="item__partner" key={'item'}>
          <img src={img6} alt="" />
        </div>
        <div className="item__partner" key={'item'}>
          <img src={img7} alt="" />
        </div>
        {/* ))} */}
      </FadeIn>
    </div>
  );
}

export default Partner;
