import React from "react";

import './index.css'
import card_data from "./card_data";

import img1 from "../../assets/images/news-screen/img1.webp"

function NewsScreenCards() {
    return (
        <div className="news-screen__cards-block">
            {card_data.map((card) =>
                <div className="news-screen__card">
                    <img className="news-screen__card-background" src={card.img} alt="#" />
                    <div className="news-screen__card-gradient"></div>
                    <div className="news-screen__card-corner-radius1"></div>
                    <div className="news-screen__card-corner-radius2"></div>
                    <div className="news-screen__card-corner"></div>
                    <div className="news-screen__card-corner-inner">
                        {card.date}
                    </div>
                    <div className="news-screen__card-description">
                        {card.description}
                    </div>
                    <button className="news-screen__card-button">
                        <span>подробнее на <span>distek.tekla.ru</span></span>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1858_731)">
                                <path d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375L19.2994 15.9375L15.2738 19.9613C15.0977 20.1373 14.9988 20.376 14.9988 20.625C14.9988 20.874 15.0977 21.1127 15.2738 21.2887C15.4498 21.4648 15.6885 21.5637 15.9375 21.5637C16.1865 21.5637 16.4252 21.4648 16.6012 21.2887L22.2262 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2262 14.3363L16.6012 8.71125C16.4252 8.53521 16.1865 8.43632 15.9375 8.43632C15.6885 8.43632 15.4498 8.53521 15.2738 8.71125C15.0977 8.88729 14.9988 9.12605 14.9988 9.375C14.9988 9.62395 15.0977 9.86271 15.2738 10.0387L19.2994 14.0625L8.4375 14.0625Z" fill="#6A6B74" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1858_731">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}

export default NewsScreenCards