import React from "react";
import partner from "../assets/img/partner.svg";
import Slider from "react-slick";
import img from "../assets/img/user-avatar.png";
import start from "../assets/img/start.svg";
import ScrollTop from "./ScrollTop";
import "../components/styles/comment.css";
import { useTranslation } from "react-i18next";
function Comment({ data, json }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const lang = localStorage.getItem("lang");

  const { t } = useTranslation();

  return (
    <div>
      <ScrollTop />
      <div className="title__partner">
        <img src={partner} alt="" />
        {t("reviews")}
      </div>
      <div className="comment__body">
        <Slider {...settings} className={"slider__one"}>
          {/* {json?.map((item) => (
            <div className="up__card" key={item}>
              <div className="card__comment">
                <p>
                  {lang === "uz"
                    ? item.comment_uz
                    : lang === "ru"
                    ? item.comment_ru
                    : item.comment_en}
                </p>
                <div className="user__profile">
                  <img src={img} alt="" className="user__img" />
                  <div className="col">
                    <p>
                      <span>{item?.user}</span>
                    </p>
                    <div className="row__start">
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          <div className="comment">
            <iframe src="https://www.youtube.com/embed/HeR-CDftADA" width="100%" height="300vw"></iframe>
          </div>
          <div className="comment">
            <iframe src="https://www.youtube.com/embed/2WLyFa68544" width="100%" height="300vw"></iframe>
          </div>
          <div className="comment">
            <iframe src="https://www.youtube.com/embed/itzVdPSBQ_k" width="100%" height="300vw"></iframe>
          </div>
          <div className="comment">
            <iframe src="https://www.youtube.com/embed/r4-BLzBq9Ks" width="100%" height="300vw"></iframe>
          </div>
        </Slider>
      </div>
      <div className="row__iframe">
        {/* <iframe
          src={data?.link_a}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          src={data?.link_b}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
}

export default Comment;
