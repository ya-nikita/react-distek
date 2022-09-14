import React from "react"
import { useState } from "react";

import './index.css'
import HeroScreenPartners from "../HeroScreenPartners";
import HeroScreenUsers from "../HeroScreenUsers";

import sketch_icon from '../../assets/images/sketch_icon.svg'
import tekla_icon from '../../assets/images/tekla_icon.svg'
import trimble_icon from '../../assets/images/trimble_icon.svg'

function HeroScreen() {
    const [blockTranslated, toggleBlockTranslated] = useState(false)
    const [adaptive, toggleAdaptive] = useState(false)

    function animate(toggle) {
        toggleBlockTranslated(toggle)
    }

    window.addEventListener('resize', () => {
        if (window.screen.width <= 1470) {
            toggleAdaptive(true)
        } else {
            toggleAdaptive(false)
        }
    });
    return (
        <section className="hero-screen">
            <div className='row'>
                <div className="col-12 hero-screen__title-block">
                    <div className="hero-screen__titles">
                        <h1>
                            Distek – дистрибьютор
                            программного обеспечения
                        </h1>
                        <div>
                            решения для BIM-моделирования
                        </div>
                    </div>
                    <div className="hero-screen__links">
                        <ul>
                            <li><img src={sketch_icon} alt='#' /><a>Sketchup</a></li>
                            <li><img src={tekla_icon} alt='#' /><a>Tekla structures</a></li>
                            <li><img src={tekla_icon} alt='#' /><a>Tekla model sharing</a></li>
                            <li><img src={trimble_icon} alt='#' /><a>Trimble connect</a></li>
                        </ul>
                    </div>
                </div>
                <div
                    className="col-12 hero-screen__description-block"
                    style={blockTranslated && !adaptive ?
                        { transform: "translateX(-191px)" } :
                        { transform: "translateX(0px)" }}
                >
                    <HeroScreenPartners animate={animate} blockTranslated={blockTranslated} adaptive={adaptive} />
                    <HeroScreenUsers animate={animate} blockTranslated={blockTranslated} adaptive={adaptive} />
                </div>
            </div>
        </section>
    )
}

export default HeroScreen