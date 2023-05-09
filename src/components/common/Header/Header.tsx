import React, { useState } from "react";
import scss from "./Header.module.scss";
import { Squeeze as Hamburger } from "hamburger-react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { BsSpotify } from "react-icons/bs";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const hadleCurrentLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={scss.header}>
      <div>
        <a href="/" className={scss.logo}>
          <img src="logo-yellow.png" alt="Sellucas" className={scss.img} />
        </a>
      </div>
      <div>
        <div className={scss.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#FAF900" />
        </div>
        {isOpen && (
          <div className={scss.menuDrop}>
            <button
              type="button"
              onClick={hadleCurrentLanguage}
              className={scss.changeLanguage}
            >
              <MdLanguage size={30} style={{ paddingRight: "8px" }} /> Change Language
            </button>
            <ul>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={32}
                  duration={500}
                >
                  {t("headerOpt1")}
                </Link>
              </li>
              <li>
                <a href="/projects">{t("headerOpt2")}</a>
              </li>
              <li>
                <a href="">{t("headerOpt3")}</a>
              </li>
            </ul>

            <span style={{ color: "#D3D3D3", marginTop: "60px" }}>
              {t("headerSayHello")}
            </span>
            <ul>
              <li>
                <a href="mailto:sellucas.dev@gmail.com">{t("headerOpt4")}</a>
              </li>
            </ul>

            <hr
              style={{
                width: "100%",
                margin: "auto",
                borderTop: "1px solid #D3D3D3",
              }}
            />

            <ul className={scss.socialIcons}>
              <li>
                <a href="https://github.com/Sellucas" target="_blank">
                  <AiOutlineGithub size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-sell-machado/"
                  target="_blank"
                >
                  <AiFillLinkedin size={40} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/sellucas1" target="_blank">
                  <AiOutlineTwitter size={40} />
                </a>
              </li>
              <li>
                <a href="https://wa.me/5548998600628" target="_blank">
                  <AiOutlineWhatsApp size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/user/lucassellmachado"
                  target="_blank"
                >
                  <BsSpotify size={35} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
