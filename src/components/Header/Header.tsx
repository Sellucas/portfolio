import React, { useState } from "react";
import scss from "./Header.module.scss";
import { Squeeze as Hamburger } from "hamburger-react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["600"], subsets: ["latin"] });

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
            <ul className={openSans.className}>
              <li>
                <a href="">ABOUT ME</a>
              </li>
              <li>
                <a href="">MY PROJECTS</a>
              </li>
              <li>
                <a href="">MY RESUME</a>
              </li>

              <span style={{ color: "grey", marginTop: "120px" }}>
                SAY HELLO
              </span>
              <li>
                <a href="">HELLO.SELLUCAS@DEV</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
