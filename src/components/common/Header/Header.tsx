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
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

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
        <Link href="/" className={scss.logo}>
          <Image width={120} height={100} src="/logo-yellow.png" alt="Sellucas" className={scss.img} />
        </Link>
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
              <MdLanguage size={30} style={{ paddingRight: "8px" }} /> Change
              Language
            </button>
            <ul>
              <li>
                <LinkScroll
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={32}
                  duration={500}
                >
                  {t("headerOpt1")}
                </LinkScroll>
              </li>
              <li>
                <Link href="/projects">{t("headerOpt2")}</Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1s7ATKooqCWc5vMESUmbsWXwPmg6Yn7fO/view"
                  target="_blank"
                >
                  {t("headerOpt3")}
                </Link>
              </li>
            </ul>

            <span style={{ color: "#D3D3D3", marginTop: "60px" }}>
              {t("headerSayHello")}
            </span>
            <ul>
              <li>
                <Link href="mailto:sellucas.dev@gmail.com">{t("headerOpt4")}</Link>
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
                <Link href="https://github.com/Sellucas" target="_blank">
                  <AiOutlineGithub size={40} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/lucas-sell-machado/"
                  target="_blank"
                >
                  <AiFillLinkedin size={40} />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/sellucas1" target="_blank">
                  <AiOutlineTwitter size={40} />
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/5548998600628" target="_blank">
                  <AiOutlineWhatsApp size={40} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://open.spotify.com/user/lucassellmachado"
                  target="_blank"
                >
                  <BsSpotify size={35} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
