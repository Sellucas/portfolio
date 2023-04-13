import React, { useState } from "react";
import scss from "./Header.module.scss";
import { Squeeze as Hamburger } from "hamburger-react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={scss.header}>
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
                <a href="">ABOUT ME</a>
              </li>
              <li>
                <a href="">MY PROJECTS</a>
              </li>
              <li>
                <a href="">MY RESUME</a>
              </li>
            </ul>

            <span style={{ color: "#D3D3D3", marginTop: "50px" }}>
              SAY HELLO
            </span>
            <ul>
              <li>
                <a href="">HELLO.SELLUCAS@DEV</a>
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
                <a href="">
                  <AiOutlineGithub size={40} />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillLinkedin size={40} />
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineTwitter size={40} />
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineInstagram size={40} />
                </a>
              </li>
              <li>
                <a href="">
                  <BsSpotify size={35} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
