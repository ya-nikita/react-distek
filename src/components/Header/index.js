import React from "react";

import './index.css'
import logo from '../../assets/images/distek-logo.png'


function Header() {
    return (
        <header>
            <div className="row header__row">
                <div className="col-header__left">
                    <div className="header__left">
                        <div className="header__img">
                            <img src={logo} alt="#" />
                        </div>
                        <nav className="header__nav">
                            <ul>
                                <li><a>Программное обеспечение</a></li>
                                <li><a>Новости</a></li>
                                <li><a>О нас</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-header__right">
                    <div className="header__phone">
                        <a href="tel:+7 495 660 93 70">+7 495 660 93 70</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header