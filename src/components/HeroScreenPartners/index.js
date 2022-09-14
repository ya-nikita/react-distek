import React from "react";
import { useState, useRef, useEffect } from "react";

import './index.css'
import gif from '../../assets/images/hero-screen/gif/main-screen-animation-1-large-crop.gif'

import profits_data from "./profits_data";

function HeroScreenPartners(props) {
    const [activeListItem, setActiveListItem] = useState('')

    const profitsList = useRef();
    let itemHeights = useRef([])

    function showText(event) {
        let listItems = profitsList.current.childNodes

        if (activeListItem) {
            listItems[activeListItem].childNodes[3].style.display = 'none'
            listItems[activeListItem].childNodes[2].style.display = 'initial'
            listItems[activeListItem].lastChild.style.height = '0'
            listItems[activeListItem].lastChild.style.paddingTop = '0'
        }
        if (event.target.tagName == 'LI') {
            if (event.target.dataset.id !== activeListItem) {
                listItems[event.target.dataset.id].childNodes[3].style.display = 'initial'
                listItems[event.target.dataset.id].childNodes[2].style.display = 'none'
                listItems[event.target.dataset.id].lastChild.style.paddingTop = '10px'
                listItems[event.target.dataset.id].lastChild.style.height = itemHeights.current[event.target.dataset.id] + 'px'
                setActiveListItem(event.target.dataset.id)
            } else {
                listItems[event.target.dataset.id].childNodes[3].style.display = 'none'
                listItems[event.target.dataset.id].childNodes[2].style.display = 'initial'
                listItems[event.target.dataset.id].lastChild.style.height = '0'
                listItems[event.target.dataset.id].lastChild.style.paddingTop = '0'
                setActiveListItem('')
            }
        }
        else if (event.target.tagName == 'svg' || event.target.tagName == 'SPAN') {
            if (event.target.parentElement.dataset.id !== activeListItem) {
                listItems[event.target.parentElement.dataset.id].childNodes[3].style.display = 'initial'
                listItems[event.target.parentElement.dataset.id].childNodes[2].style.display = 'none'
                listItems[event.target.parentElement.dataset.id].lastChild.style.paddingTop = '10px'
                listItems[event.target.parentElement.dataset.id].lastChild.style.height = itemHeights.current[event.target.parentElement.dataset.id] + 'px'
                setActiveListItem(event.target.parentElement.dataset.id)
            } else {
                listItems[event.target.parentElement.dataset.id].childNodes[3].style.display = 'none'
                listItems[event.target.parentElement.dataset.id].childNodes[2].style.display = 'initial'
                listItems[event.target.parentElement.dataset.id].lastChild.style.height = '0'
                listItems[event.target.parentElement.dataset.id].lastChild.style.paddingTop = '0'
                setActiveListItem('')
            }
        }
        else if (event.target.tagName == 'path') {
            if (event.target.parentElement.parentElement.dataset.id !== activeListItem) {
                listItems[event.target.parentElement.parentElement.dataset.id].childNodes[3].style.display = 'initial'
                listItems[event.target.parentElement.parentElement.dataset.id].childNodes[2].style.display = 'none'
                listItems[event.target.parentElement.parentElement.dataset.id].lastChild.style.paddingTop = '10px'
                listItems[event.target.parentElement.parentElement.dataset.id].lastChild.style.height = itemHeights.current[event.target.parentElement.parentElement.dataset.id] + 'px'
                setActiveListItem(event.target.parentElement.parentElement.dataset.id)
            } else {
                listItems[event.target.parentElement.parentElement.dataset.id].childNodes[3].style.display = 'none'
                listItems[event.target.parentElement.parentElement.dataset.id].childNodes[2].style.display = 'initial'
                listItems[event.target.parentElement.parentElement.dataset.id].lastChild.style.height = '0'
                listItems[event.target.parentElement.parentElement.dataset.id].lastChild.style.paddingTop = '0'
                setActiveListItem('')
            }
        }
    }

    useEffect(() => {
        itemHeights.current = []
        window.addEventListener('load', () => {
            for (let index = 0; index < profitsList.current.childNodes.length; index++) {
                profitsList.current.childNodes[index].lastChild.style.height = '100%'
                itemHeights.current.push(profitsList.current.childNodes[index].lastChild.clientHeight + 10)
                profitsList.current.childNodes[index].lastChild.style.height = '0'
            }
        })
    }, [])

    let elementsStyle
    if (!props.blockTranslated && !props.adaptive) {
        elementsStyle = '-active'
    } else {
        elementsStyle = ''
    }

    return (
        <div onClick={() => props.animate(false)} className="hero-screen__for-partners">
            <div className="hero-screen__for-partners-hover"></div>
            <div className="hero-screen__corner-radius1"></div>
            <div className="hero-screen__corner-radius2"></div>
            <div className="hero-screen__for-partners-wrapper">
                <div className="hero-screen__for-partners-corner">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.86252V0H12.3547L15.064 2.86252V17.1751H22V20H0V17.1751H12.3547V2.86252H0Z" fill="#393838" />
                    </svg>
                </div>
                <div className="hero-screen__for-partners-title">
                    <h3 className={'hero-screen__for-partners-title-h3' + elementsStyle}
                    >
                        партнерам и вендорам
                    </h3>
                    <a href="mailto:info@distek.ru">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.572 0.0830008L10.676 7.12C10.4928 7.28334 10.2559 7.3736 10.0105 7.3736C9.76506 7.3736 9.5282 7.28334 9.345 7.12L1.416 0.0870008C1.60529 0.0292673 1.8021 -5.21281e-05 2 8.21023e-07H18C18.1937 -0.000174671 18.3864 0.0277839 18.572 0.0830008ZM19.928 1.468C19.975 1.638 20 1.816 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H2C1.46957 14 0.96086 13.7893 0.585788 13.4142C0.210715 13.0391 1.20033e-06 12.5304 1.20033e-06 12V2C-0.00019648 1.81957 0.0240233 1.63994 0.0720012 1.466L8.014 8.614C8.56352 9.10374 9.27392 9.37436 10.01 9.37436C10.7461 9.37436 11.4565 9.10374 12.006 8.614L19.928 1.468Z" fill="url(#paint0_linear_1529_705)" />
                            <defs>
                                <linearGradient id="paint0_linear_1529_705" x1="-7.32143" y1="18.25" x2="14.9148" y2="-7.95246" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#30B3ED" />
                                    <stop offset="0.277625" stop-color="#299EE2" />
                                    <stop offset="0.556873" stop-color="#258BD7" />
                                    <stop offset="0.78005" stop-color="#44A1E0" />
                                    <stop offset="1" stop-color="#51A8E3" />
                                </linearGradient>
                            </defs>
                        </svg>
                        info@distek.ru
                    </a>
                </div>
            </div>
            <div className="hero-screen__for-partners-info">
                <div className="hero-screen__for-partners-info-text">
                    <span className="hero-screen__for-partners-info-subtitle">преимущества</span>
                    <ul
                        onClick={showText}
                        ref={profitsList}
                        className="hero-screen__for-partners-info-profits"
                    >
                        {profits_data.map((item, key) => {
                            return (
                                <li data-id={key}><small>{item.id}</small>
                                    <span>{item.text}</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 7.30943V8.53774H5V7.30943H11ZM8.70341 5V11H7.30261V5H8.70341Z" fill="#393838" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895432 0 0 0.895416 0 2V14C0 15.1046 0.895432 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895416 15.1046 0 14 0H2ZM2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2Z" fill="#393838" />
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 7.30943V8.53774H5V7.30943H11ZM8.70341 7.30943V8.53774H7.30261V7.30943H8.70341Z" fill="#393838" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895432 0 0 0.895416 0 2V14C0 15.1046 0.895432 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895416 15.1046 0 14 0H2ZM2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2Z" fill="#393838" />
                                    </svg>
                                    <p className="hero-screen__for-partners-info-innertext" >{item.inner_text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="hero-screen__for-partners-info-gif">
                    <img src={gif} alt="#" />
                </div>
            </div>
        </div >
    )
}

export default HeroScreenPartners