import React from "react";
import partner from "../assets/img/partner.svg";
import FadeIn from "react-fade-in/lib/FadeIn";
import "../components/styles/trusted.css";
import img1 from "../assets/img/chaqar.png";
import img2 from "../assets/img/magic galaxy (2).png";
import img3 from "../assets/img/ozbegim (2).png";
import img4 from "../assets/img/manor.png";
import img5 from "../assets/img/1001.png";
import img6 from "../assets/img/centrion.png";
import { useTranslation } from "react-i18next";


function Partner({ data }) {
    const url = 'https://nura.admin.techdatasoft.uz/images/'

    const { t } = useTranslation();

    return (
        <div>

            <div className="title__partner">
                <img src={partner} alt="" />
                {t("believe")}
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
                {/* ))} */}
            </FadeIn>
        </div>
    );
}

export default Partner;
