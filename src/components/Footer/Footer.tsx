import React from "react";
import scss from "./Footer.module.scss";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Teko } from "next/font/google";

const teko = Teko({ subsets: ["latin"], weight: "600" });

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#5E21CD" }}>
      <div className={scss.page}>
        <div className={scss.sectionTitle}>
          <h3 className={teko.className}>
            Stay <span>connected</span> to my socials!
          </h3>
          <hr />
        </div>

        <section className={scss.socials}>
          <ul className={scss.socialIcons}>
            <IconContext.Provider value={{ className: scss.sharedClassIcon }}>
              <li>
                <a href="">
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <BsSpotify />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </section>

        <div className={scss.designed}>
          <p className={teko.className}>
            Designed & Built by{" "}
            <a href="https://github.com/Sellucas" target="_blank">
              Sellucas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
