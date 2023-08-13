import React from 'react';
import Scroll from "../../assets/scroll.svg";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scrolldown button--flex">
              <div className="scroll-content">
                  <img src={Scroll} alt="" className="home__scroll-mouse wheel"/>
                    <span className='home__scroll-name'>Scroll Down
                    </span>
                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </div>
        </a>
    </div>
  )
}

export default ScrollDown;