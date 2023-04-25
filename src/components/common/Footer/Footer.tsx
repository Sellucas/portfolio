import React from "react";
import scss from "./Footer.module.scss";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.page}>
        <div className={scss.sectionTitle}>
          <h3>
            Stay <span>connected</span> to my socials!
          </h3>
          <hr />
        </div>

        <section className={scss.socials}>
          <ul className={scss.socialIcons}>
            <IconContext.Provider value={{ className: scss.sharedClassIcon }}>
              <li>
                <a href="https://github.com/Sellucas" target="_blank">
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-sell-machado/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/sellucas1" target="_blank">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="https://wa.me/5548998600628" target="_blank">
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/user/lucassellmachado"
                  target="_blank"
                >
                  <BsSpotify />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </section>

        <div className={scss.designed}>
          <p>
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
