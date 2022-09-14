import React from "react";
import { useRef, useEffect, useState } from "react";

import './index.css'
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";


function HeroScreenUsers() {
    const [highestLinksBlock, setHighestLinksBlock] = useState(0)
    const [highestTitleBlock, setHighestTitleBlock] = useState(0)
    const [adaptivePoint, setAdaptivePoint] = useState(false)

    const cardsBlock = useRef();

    function getHighestBlocks(blocks) {
        let linkBlocksHeight = []
        let titleBlocksHeight = []
        for (let i = 0; i < blocks.length; i++) {
            linkBlocksHeight.push(blocks[i].childNodes[5].clientHeight)
            titleBlocksHeight.push(blocks[i].childNodes[3].clientHeight)
        }
        let linkBlocksSorted = linkBlocksHeight.sort()
        let titleBlocksSorted = titleBlocksHeight.sort()
        setHighestLinksBlock(linkBlocksSorted[linkBlocksSorted.length - 1])
        setHighestTitleBlock(titleBlocksSorted[titleBlocksSorted.length - 1])
    }

    useEffect(() => {

        window.addEventListener('load', () => {
            getHighestBlocks(cardsBlock.current.childNodes)
            window.addEventListener('resize', () => {
                getHighestBlocks(cardsBlock.current.childNodes)
                if (document.documentElement.clientWidth < 1440) {
                    setAdaptivePoint(true)
                } else {
                    setAdaptivePoint(false)
                }
            })
        })
    }, [])
    return (
        <section className="screen-2">
            <div className="row">
                <div className="col-12 screen-2__title-block">
                    <h2>Программное обеспечение для ваших задач</h2>
                </div>
                <div ref={cardsBlock} className="screen-2__cards-block">
                    <Card1
                        adaptivePoint={adaptivePoint}
                        highestLinksBlock={highestLinksBlock}
                        highestTitleBlock={highestTitleBlock} />
                    <Card2
                        adaptivePoint={adaptivePoint}
                        highestLinksBlock={highestLinksBlock}
                        highestTitleBlock={highestTitleBlock} />
                    <Card3
                        adaptivePoint={adaptivePoint}
                        highestLinksBlock={highestLinksBlock}
                        highestTitleBlock={highestTitleBlock} />
                </div>
            </div>
        </section>
    )
}

export default HeroScreenUsers