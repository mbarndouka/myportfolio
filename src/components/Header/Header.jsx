import React, { useState } from 'react';
// import Logo from "../../assets/Logo1.png";

import "./Header.css";

const Header = () => {
    // change background header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header")
        }
    })
    //toggle menu
    const [toggle, ShowMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className="header">
        <nav className='nav container'>
              <a href="index.html" className='nav__logo'>
                  Mbarndouka
                {/*   <img src={Logo} alt="" className='nav__logo-img' /> */}
              </a>
            <div className={toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grids">
                    <li className="nav__item">
                          <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ?
                              "nav__link active__link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ?
                              "nav__link active__link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ?
                              "nav__link active__link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ?
                              "nav__link active__link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li> */}

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ?
                              "nav__link active__link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ?
                              "nav__link active__link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close"
                onClick={()=>ShowMenu(!toggle)}></i>
                
            </div>
            <div className="nav__toggle" onClick={()=>ShowMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;