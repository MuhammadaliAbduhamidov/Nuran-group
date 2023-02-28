import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import "./styles/header.css";
import { Link } from "react-router-dom";
import arrow from "../assets/img/toleft.svg";
import { FormattedMessage } from "react-intl";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
function Header(props) {
  const [clas, setClas] = React.useState("");
  const [link, setLink] = React.useState("");
  React.useEffect(() => {
    setClas("transform");
    setTimeout(() => {
      setClas("");
    }, 1000);
  }, [link]);

  const {t} = useTranslation();

  return (
    <div className="header">
      {link === "/interer" ? (
        <FadeIn>
          <article>
            {/* <h1>{props.titleName}</h1> */}
            <h1>{t("interyer")}</h1>
          </article>
        </FadeIn>
      ) : link === "/finishing" ? (
        <FadeIn>
          <section>
            <h1>{t("otdelka")} </h1>
          </section>
        </FadeIn>
      ) : link === "/about" ? (
        <FadeIn>
          <h1>{t("about")} </h1>
          <br />
          <br />
          <br />
        </FadeIn>
      ) : link === "/service" ? (
        <FadeIn>
          <h1>{t("uslugi")} </h1>
          <br />
          <br />
          <br />
        </FadeIn>
      ) : (
        <FadeIn>
          <article>
            <h1>{t("home")}</h1>
          </article>
        </FadeIn>
      )}
      {/* <Link to={link}>
        <button>
        {t("explore")} <img className={clas} src={arrow} alt="" />
        </button>
      </Link> */}
      <FadeIn className="navigation">
        <Link to="/interer"
          className={
            props.active === "interer" || (link === "/interer" && "active")
          }
          onClick={() => setLink("/interer")}
        >
          {t("interyer")}
        </Link>
        <Link to="/finishing"
          className={
            props.active === "finishing" || (link === "/finishing" && "active")
          }
          onClick={() => setLink("/finishing")}
        >
          {t("otdelka")}
        </Link>
        <Link to="/about"
          className={
            props.active === "about" || (link === "/about" && "active")
          }
          onClick={() => setLink("/about")}
        >
          {t("about")}
        </Link>
        <Link to="/service"
          className={
            props.active === "service" || (link === "/service" && "active")
          }
          onClick={() => setLink("/service")}
        >
          {t("uslugi")}
        </Link>
      </FadeIn>

      {link === "/interer" ? (
        <div className='bg bg3'></div>
      ) : link === "/about" ? (
        <div className='bg bg5'></div>
      ) : link === "/service" ? (
        <div className='bg bg4'></div>
      ) :  link === "/finishing" ? (
        <div className='bg bg2'></div>
      ) :(
        <div className='bg bg1'></div>
      )}
    </div>
  );
}

export default Header;
