import React, { useState } from "react";
import scss from "./Header.module.scss";
import { Squeeze as Hamburger } from "hamburger-react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={scss.header}>
      <div>
        <a href="/">
          <img src="logo-yellow.png" alt="Sellucas" className={scss.img} />
        </a>
      </div>
      <div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#FAF900" />
        </div>
        {isOpen && (
          <div className={scss.menuDrop}>
            <ul>
              <li>
                <a href="#about">ABOUT ME</a>
              </li>
              <li>
                <a href="">MY PROJECTS</a>
              </li>
              <li>
                <a href="">MY RESUME</a>
              </li>
            </ul>

            <span style={{ color: "#D3D3D3", marginTop: "60px" }}>
              SAY HELLO
            </span>
            <ul>
              <li>
                <a href="mailto:sellucas.dev@gmail.com">HELLO.SELLUCAS@DEV</a>
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
