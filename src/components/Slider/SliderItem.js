import React from "react";
function SliderItem({ data, uzbek, russian, english }) {
  const lang = localStorage.getItem("lang");
  return (
    <div>
      <div className="slider__item">
        <img
          src={data.image}
          alt="" />
        <div className="text__content">
          <div className="column">
            <h1>{uzbek ? data.name_uz
              : lang === "ru"
                ? data.name_ru
                : data.name_en}</h1>
            <p>
              {lang === "uz"
                ? data.description_uz
                : lang === "ru"
                  ? data.description_ru
                  : data.description_en}
            </p>
            {/* <li>56 КВ/М </li> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
