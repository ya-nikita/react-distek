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
                            <li><img src={sketch_icon} alt='#' /><a>Sketchup
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1461_958" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" />
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" fill="#197ACF" />
                                    <path d="M16.854 7.35463L16.1478 6.64663L16.1469 6.64752L16.854 7.35463ZM16.854 6.64663L16.1469 7.35374L16.1478 7.35463L16.854 6.64663ZM12.854 2.64663L13.5611 1.93952V1.93952L12.854 2.64663ZM11.9994 3.00063H12.9994H11.9994ZM12.146 3.35463L11.4389 4.06174L11.439 4.06185L12.146 3.35463ZM15.293 6.50063V7.50063H17.7078L16 5.79341L15.293 6.50063ZM5.5 6.50063V5.50063V6.50063ZM3 9.00063H2H3ZM3 17.0006H2H3ZM4 17.0006H5H4ZM15.293 7.50063L16 8.20785L17.7078 6.50063H15.293V7.50063ZM12.146 10.6466L11.439 9.93941L11.4389 9.93952L12.146 10.6466ZM11.9994 11.0006H10.9994H11.9994ZM12.5 11.5013V12.5013V11.5013ZM12.854 11.3546L13.5611 12.0617L12.854 11.3546ZM17.5602 8.06263C17.6999 7.92329 17.8107 7.75777 17.8863 7.57553L16.0391 6.809C16.0643 6.74825 16.1012 6.69308 16.1478 6.64663L17.5602 8.06263ZM17.8863 7.57553C17.962 7.3933 18.0009 7.19793 18.0009 7.00063H16.0009C16.0009 6.93486 16.0139 6.86974 16.0391 6.809L17.8863 7.57553ZM18.0009 7.00063C18.0009 6.80333 17.962 6.60796 17.8863 6.42573L16.0391 7.19227C16.0139 7.13152 16.0009 7.0664 16.0009 7.00063H18.0009ZM17.8863 6.42573C17.8107 6.2435 17.6999 6.07797 17.5602 5.93863L16.1478 7.35463C16.1012 7.30818 16.0643 7.25301 16.0391 7.19227L17.8863 6.42573ZM17.5611 5.93952L13.5611 1.93952L12.1469 3.35374L16.1469 7.35374L17.5611 5.93952ZM13.5611 1.93952C13.2797 1.6581 12.898 1.5 12.5 1.5V3.5C12.3676 3.5 12.2405 3.44739 12.1469 3.35374L13.5611 1.93952ZM12.5 1.5C12.102 1.5 11.7203 1.6581 11.4389 1.93952L12.8531 3.35374C12.7595 3.44739 12.6324 3.5 12.5 3.5V1.5ZM11.4389 1.93952C11.1575 2.22095 10.9994 2.60264 10.9994 3.00063H12.9994C12.9994 3.13307 12.9468 3.26009 12.8531 3.35374L11.4389 1.93952ZM10.9994 3.00063C10.9994 3.39862 11.1575 3.78031 11.4389 4.06174L12.8531 2.64752C12.9468 2.74118 12.9994 2.86819 12.9994 3.00063H10.9994ZM11.439 4.06185L14.586 7.20785L16 5.79341L12.853 2.64741L11.439 4.06185ZM15.293 5.50063H5.5V7.50063H15.293V5.50063ZM5.5 5.50063C4.57174 5.50063 3.6815 5.86938 3.02513 6.52576L4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063V5.50063ZM3.02513 6.52576C2.36875 7.18214 2 8.07237 2 9.00063H4C4 8.60281 4.15804 8.22128 4.43934 7.93997L3.02513 6.52576ZM2 9.00063V17.0006H4V9.00063H2ZM2 17.0006C2 17.3985 2.15803 17.78 2.43934 18.0613L3.85355 16.6471C3.94732 16.7408 4 16.868 4 17.0006H2ZM2.43934 18.0613C2.72065 18.3426 3.10218 18.5006 3.5 18.5006V16.5006C3.63261 16.5006 3.75978 16.5533 3.85355 16.6471L2.43934 18.0613ZM3.5 18.5006C3.89782 18.5006 4.27935 18.3426 4.56066 18.0613L3.14645 16.6471C3.24022 16.5533 3.36739 16.5006 3.5 16.5006V18.5006ZM4.56066 18.0613C4.84197 17.78 5 17.3985 5 17.0006H3C3 16.868 3.05268 16.7408 3.14645 16.6471L4.56066 18.0613ZM5 17.0006V9.00063H3V17.0006H5ZM5 9.00063C5 8.86802 5.05268 8.74085 5.14645 8.64708L3.73223 7.23287C3.26339 7.70171 3 8.33759 3 9.00063H5ZM5.14645 8.64708C5.24022 8.55331 5.36739 8.50063 5.5 8.50063V6.50063C4.83696 6.50063 4.20107 6.76403 3.73223 7.23287L5.14645 8.64708ZM5.5 8.50063H15.293V6.50063H5.5V8.50063ZM14.586 6.79341L11.439 9.93941L12.853 11.3539L16 8.20785L14.586 6.79341ZM11.4389 9.93952C11.1575 10.2209 10.9994 10.6026 10.9994 11.0006H12.9994C12.9994 11.1331 12.9468 11.2601 12.8531 11.3537L11.4389 9.93952ZM10.9994 11.0006C10.9994 11.3986 11.1575 11.7803 11.4389 12.0617L12.8531 10.6475C12.9468 10.7412 12.9994 10.8682 12.9994 11.0006H10.9994ZM11.4389 12.0617C11.7203 12.3432 12.102 12.5013 12.5 12.5013V10.5013C12.6324 10.5013 12.7595 10.5539 12.8531 10.6475L11.4389 12.0617ZM12.5 12.5013C12.898 12.5013 13.2797 12.3432 13.5611 12.0617L12.1469 10.6475C12.2405 10.5539 12.3676 10.5013 12.5 10.5013V12.5013ZM13.5611 12.0617L17.5611 8.06174L16.1469 6.64752L12.1469 10.6475L13.5611 12.0617Z" fill="#197ACF" mask="url(#path-1-inside-1_1461_958)" />
                                </svg></a></li>
                            <li><img src={tekla_icon} alt='#' /><a>Tekla structures
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1461_958" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" />
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" fill="#197ACF" />
                                    <path d="M16.854 7.35463L16.1478 6.64663L16.1469 6.64752L16.854 7.35463ZM16.854 6.64663L16.1469 7.35374L16.1478 7.35463L16.854 6.64663ZM12.854 2.64663L13.5611 1.93952V1.93952L12.854 2.64663ZM11.9994 3.00063H12.9994H11.9994ZM12.146 3.35463L11.4389 4.06174L11.439 4.06185L12.146 3.35463ZM15.293 6.50063V7.50063H17.7078L16 5.79341L15.293 6.50063ZM5.5 6.50063V5.50063V6.50063ZM3 9.00063H2H3ZM3 17.0006H2H3ZM4 17.0006H5H4ZM15.293 7.50063L16 8.20785L17.7078 6.50063H15.293V7.50063ZM12.146 10.6466L11.439 9.93941L11.4389 9.93952L12.146 10.6466ZM11.9994 11.0006H10.9994H11.9994ZM12.5 11.5013V12.5013V11.5013ZM12.854 11.3546L13.5611 12.0617L12.854 11.3546ZM17.5602 8.06263C17.6999 7.92329 17.8107 7.75777 17.8863 7.57553L16.0391 6.809C16.0643 6.74825 16.1012 6.69308 16.1478 6.64663L17.5602 8.06263ZM17.8863 7.57553C17.962 7.3933 18.0009 7.19793 18.0009 7.00063H16.0009C16.0009 6.93486 16.0139 6.86974 16.0391 6.809L17.8863 7.57553ZM18.0009 7.00063C18.0009 6.80333 17.962 6.60796 17.8863 6.42573L16.0391 7.19227C16.0139 7.13152 16.0009 7.0664 16.0009 7.00063H18.0009ZM17.8863 6.42573C17.8107 6.2435 17.6999 6.07797 17.5602 5.93863L16.1478 7.35463C16.1012 7.30818 16.0643 7.25301 16.0391 7.19227L17.8863 6.42573ZM17.5611 5.93952L13.5611 1.93952L12.1469 3.35374L16.1469 7.35374L17.5611 5.93952ZM13.5611 1.93952C13.2797 1.6581 12.898 1.5 12.5 1.5V3.5C12.3676 3.5 12.2405 3.44739 12.1469 3.35374L13.5611 1.93952ZM12.5 1.5C12.102 1.5 11.7203 1.6581 11.4389 1.93952L12.8531 3.35374C12.7595 3.44739 12.6324 3.5 12.5 3.5V1.5ZM11.4389 1.93952C11.1575 2.22095 10.9994 2.60264 10.9994 3.00063H12.9994C12.9994 3.13307 12.9468 3.26009 12.8531 3.35374L11.4389 1.93952ZM10.9994 3.00063C10.9994 3.39862 11.1575 3.78031 11.4389 4.06174L12.8531 2.64752C12.9468 2.74118 12.9994 2.86819 12.9994 3.00063H10.9994ZM11.439 4.06185L14.586 7.20785L16 5.79341L12.853 2.64741L11.439 4.06185ZM15.293 5.50063H5.5V7.50063H15.293V5.50063ZM5.5 5.50063C4.57174 5.50063 3.6815 5.86938 3.02513 6.52576L4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063V5.50063ZM3.02513 6.52576C2.36875 7.18214 2 8.07237 2 9.00063H4C4 8.60281 4.15804 8.22128 4.43934 7.93997L3.02513 6.52576ZM2 9.00063V17.0006H4V9.00063H2ZM2 17.0006C2 17.3985 2.15803 17.78 2.43934 18.0613L3.85355 16.6471C3.94732 16.7408 4 16.868 4 17.0006H2ZM2.43934 18.0613C2.72065 18.3426 3.10218 18.5006 3.5 18.5006V16.5006C3.63261 16.5006 3.75978 16.5533 3.85355 16.6471L2.43934 18.0613ZM3.5 18.5006C3.89782 18.5006 4.27935 18.3426 4.56066 18.0613L3.14645 16.6471C3.24022 16.5533 3.36739 16.5006 3.5 16.5006V18.5006ZM4.56066 18.0613C4.84197 17.78 5 17.3985 5 17.0006H3C3 16.868 3.05268 16.7408 3.14645 16.6471L4.56066 18.0613ZM5 17.0006V9.00063H3V17.0006H5ZM5 9.00063C5 8.86802 5.05268 8.74085 5.14645 8.64708L3.73223 7.23287C3.26339 7.70171 3 8.33759 3 9.00063H5ZM5.14645 8.64708C5.24022 8.55331 5.36739 8.50063 5.5 8.50063V6.50063C4.83696 6.50063 4.20107 6.76403 3.73223 7.23287L5.14645 8.64708ZM5.5 8.50063H15.293V6.50063H5.5V8.50063ZM14.586 6.79341L11.439 9.93941L12.853 11.3539L16 8.20785L14.586 6.79341ZM11.4389 9.93952C11.1575 10.2209 10.9994 10.6026 10.9994 11.0006H12.9994C12.9994 11.1331 12.9468 11.2601 12.8531 11.3537L11.4389 9.93952ZM10.9994 11.0006C10.9994 11.3986 11.1575 11.7803 11.4389 12.0617L12.8531 10.6475C12.9468 10.7412 12.9994 10.8682 12.9994 11.0006H10.9994ZM11.4389 12.0617C11.7203 12.3432 12.102 12.5013 12.5 12.5013V10.5013C12.6324 10.5013 12.7595 10.5539 12.8531 10.6475L11.4389 12.0617ZM12.5 12.5013C12.898 12.5013 13.2797 12.3432 13.5611 12.0617L12.1469 10.6475C12.2405 10.5539 12.3676 10.5013 12.5 10.5013V12.5013ZM13.5611 12.0617L17.5611 8.06174L16.1469 6.64752L12.1469 10.6475L13.5611 12.0617Z" fill="#197ACF" mask="url(#path-1-inside-1_1461_958)" />
                                </svg></a></li>
                            <li><img src={tekla_icon} alt='#' /><a>Tekla model sharing
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1461_958" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" />
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" fill="#197ACF" />
                                    <path d="M16.854 7.35463L16.1478 6.64663L16.1469 6.64752L16.854 7.35463ZM16.854 6.64663L16.1469 7.35374L16.1478 7.35463L16.854 6.64663ZM12.854 2.64663L13.5611 1.93952V1.93952L12.854 2.64663ZM11.9994 3.00063H12.9994H11.9994ZM12.146 3.35463L11.4389 4.06174L11.439 4.06185L12.146 3.35463ZM15.293 6.50063V7.50063H17.7078L16 5.79341L15.293 6.50063ZM5.5 6.50063V5.50063V6.50063ZM3 9.00063H2H3ZM3 17.0006H2H3ZM4 17.0006H5H4ZM15.293 7.50063L16 8.20785L17.7078 6.50063H15.293V7.50063ZM12.146 10.6466L11.439 9.93941L11.4389 9.93952L12.146 10.6466ZM11.9994 11.0006H10.9994H11.9994ZM12.5 11.5013V12.5013V11.5013ZM12.854 11.3546L13.5611 12.0617L12.854 11.3546ZM17.5602 8.06263C17.6999 7.92329 17.8107 7.75777 17.8863 7.57553L16.0391 6.809C16.0643 6.74825 16.1012 6.69308 16.1478 6.64663L17.5602 8.06263ZM17.8863 7.57553C17.962 7.3933 18.0009 7.19793 18.0009 7.00063H16.0009C16.0009 6.93486 16.0139 6.86974 16.0391 6.809L17.8863 7.57553ZM18.0009 7.00063C18.0009 6.80333 17.962 6.60796 17.8863 6.42573L16.0391 7.19227C16.0139 7.13152 16.0009 7.0664 16.0009 7.00063H18.0009ZM17.8863 6.42573C17.8107 6.2435 17.6999 6.07797 17.5602 5.93863L16.1478 7.35463C16.1012 7.30818 16.0643 7.25301 16.0391 7.19227L17.8863 6.42573ZM17.5611 5.93952L13.5611 1.93952L12.1469 3.35374L16.1469 7.35374L17.5611 5.93952ZM13.5611 1.93952C13.2797 1.6581 12.898 1.5 12.5 1.5V3.5C12.3676 3.5 12.2405 3.44739 12.1469 3.35374L13.5611 1.93952ZM12.5 1.5C12.102 1.5 11.7203 1.6581 11.4389 1.93952L12.8531 3.35374C12.7595 3.44739 12.6324 3.5 12.5 3.5V1.5ZM11.4389 1.93952C11.1575 2.22095 10.9994 2.60264 10.9994 3.00063H12.9994C12.9994 3.13307 12.9468 3.26009 12.8531 3.35374L11.4389 1.93952ZM10.9994 3.00063C10.9994 3.39862 11.1575 3.78031 11.4389 4.06174L12.8531 2.64752C12.9468 2.74118 12.9994 2.86819 12.9994 3.00063H10.9994ZM11.439 4.06185L14.586 7.20785L16 5.79341L12.853 2.64741L11.439 4.06185ZM15.293 5.50063H5.5V7.50063H15.293V5.50063ZM5.5 5.50063C4.57174 5.50063 3.6815 5.86938 3.02513 6.52576L4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063V5.50063ZM3.02513 6.52576C2.36875 7.18214 2 8.07237 2 9.00063H4C4 8.60281 4.15804 8.22128 4.43934 7.93997L3.02513 6.52576ZM2 9.00063V17.0006H4V9.00063H2ZM2 17.0006C2 17.3985 2.15803 17.78 2.43934 18.0613L3.85355 16.6471C3.94732 16.7408 4 16.868 4 17.0006H2ZM2.43934 18.0613C2.72065 18.3426 3.10218 18.5006 3.5 18.5006V16.5006C3.63261 16.5006 3.75978 16.5533 3.85355 16.6471L2.43934 18.0613ZM3.5 18.5006C3.89782 18.5006 4.27935 18.3426 4.56066 18.0613L3.14645 16.6471C3.24022 16.5533 3.36739 16.5006 3.5 16.5006V18.5006ZM4.56066 18.0613C4.84197 17.78 5 17.3985 5 17.0006H3C3 16.868 3.05268 16.7408 3.14645 16.6471L4.56066 18.0613ZM5 17.0006V9.00063H3V17.0006H5ZM5 9.00063C5 8.86802 5.05268 8.74085 5.14645 8.64708L3.73223 7.23287C3.26339 7.70171 3 8.33759 3 9.00063H5ZM5.14645 8.64708C5.24022 8.55331 5.36739 8.50063 5.5 8.50063V6.50063C4.83696 6.50063 4.20107 6.76403 3.73223 7.23287L5.14645 8.64708ZM5.5 8.50063H15.293V6.50063H5.5V8.50063ZM14.586 6.79341L11.439 9.93941L12.853 11.3539L16 8.20785L14.586 6.79341ZM11.4389 9.93952C11.1575 10.2209 10.9994 10.6026 10.9994 11.0006H12.9994C12.9994 11.1331 12.9468 11.2601 12.8531 11.3537L11.4389 9.93952ZM10.9994 11.0006C10.9994 11.3986 11.1575 11.7803 11.4389 12.0617L12.8531 10.6475C12.9468 10.7412 12.9994 10.8682 12.9994 11.0006H10.9994ZM11.4389 12.0617C11.7203 12.3432 12.102 12.5013 12.5 12.5013V10.5013C12.6324 10.5013 12.7595 10.5539 12.8531 10.6475L11.4389 12.0617ZM12.5 12.5013C12.898 12.5013 13.2797 12.3432 13.5611 12.0617L12.1469 10.6475C12.2405 10.5539 12.3676 10.5013 12.5 10.5013V12.5013ZM13.5611 12.0617L17.5611 8.06174L16.1469 6.64752L12.1469 10.6475L13.5611 12.0617Z" fill="#197ACF" mask="url(#path-1-inside-1_1461_958)" />
                                </svg></a></li>
                            <li><img src={trimble_icon} alt='#' /><a>Trimble connect
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1461_958" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" />
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.854 7.35463C16.9006 7.30819 16.9375 7.25301 16.9627 7.19227C16.9879 7.13152 17.0009 7.0664 17.0009 7.00063C17.0009 6.93486 16.9879 6.86974 16.9627 6.809C16.9375 6.74825 16.9006 6.69308 16.854 6.64663L12.854 2.64663C12.7601 2.55274 12.6328 2.5 12.5 2.5C12.3672 2.5 12.2399 2.55274 12.146 2.64663C12.0521 2.74052 11.9994 2.86786 11.9994 3.00063C11.9994 3.13341 12.0521 3.26074 12.146 3.35463L15.293 6.50063H5.5C4.83696 6.50063 4.20107 6.76402 3.73223 7.23286C3.26339 7.70171 3 8.33759 3 9.00063V17.0006C3 17.1332 3.05268 17.2604 3.14645 17.3542C3.24021 17.448 3.36739 17.5006 3.5 17.5006C3.63261 17.5006 3.75979 17.448 3.85355 17.3542C3.94732 17.2604 4 17.1332 4 17.0006V9.00063C4 8.60281 4.15804 8.22128 4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063H15.293L12.146 10.6466C12.0521 10.7405 11.9994 10.8679 11.9994 11.0006C11.9994 11.1334 12.0521 11.2607 12.146 11.3546C12.2399 11.4485 12.3672 11.5013 12.5 11.5013C12.6328 11.5013 12.7601 11.4485 12.854 11.3546L16.854 7.35463Z" fill="#197ACF" />
                                    <path d="M16.854 7.35463L16.1478 6.64663L16.1469 6.64752L16.854 7.35463ZM16.854 6.64663L16.1469 7.35374L16.1478 7.35463L16.854 6.64663ZM12.854 2.64663L13.5611 1.93952V1.93952L12.854 2.64663ZM11.9994 3.00063H12.9994H11.9994ZM12.146 3.35463L11.4389 4.06174L11.439 4.06185L12.146 3.35463ZM15.293 6.50063V7.50063H17.7078L16 5.79341L15.293 6.50063ZM5.5 6.50063V5.50063V6.50063ZM3 9.00063H2H3ZM3 17.0006H2H3ZM4 17.0006H5H4ZM15.293 7.50063L16 8.20785L17.7078 6.50063H15.293V7.50063ZM12.146 10.6466L11.439 9.93941L11.4389 9.93952L12.146 10.6466ZM11.9994 11.0006H10.9994H11.9994ZM12.5 11.5013V12.5013V11.5013ZM12.854 11.3546L13.5611 12.0617L12.854 11.3546ZM17.5602 8.06263C17.6999 7.92329 17.8107 7.75777 17.8863 7.57553L16.0391 6.809C16.0643 6.74825 16.1012 6.69308 16.1478 6.64663L17.5602 8.06263ZM17.8863 7.57553C17.962 7.3933 18.0009 7.19793 18.0009 7.00063H16.0009C16.0009 6.93486 16.0139 6.86974 16.0391 6.809L17.8863 7.57553ZM18.0009 7.00063C18.0009 6.80333 17.962 6.60796 17.8863 6.42573L16.0391 7.19227C16.0139 7.13152 16.0009 7.0664 16.0009 7.00063H18.0009ZM17.8863 6.42573C17.8107 6.2435 17.6999 6.07797 17.5602 5.93863L16.1478 7.35463C16.1012 7.30818 16.0643 7.25301 16.0391 7.19227L17.8863 6.42573ZM17.5611 5.93952L13.5611 1.93952L12.1469 3.35374L16.1469 7.35374L17.5611 5.93952ZM13.5611 1.93952C13.2797 1.6581 12.898 1.5 12.5 1.5V3.5C12.3676 3.5 12.2405 3.44739 12.1469 3.35374L13.5611 1.93952ZM12.5 1.5C12.102 1.5 11.7203 1.6581 11.4389 1.93952L12.8531 3.35374C12.7595 3.44739 12.6324 3.5 12.5 3.5V1.5ZM11.4389 1.93952C11.1575 2.22095 10.9994 2.60264 10.9994 3.00063H12.9994C12.9994 3.13307 12.9468 3.26009 12.8531 3.35374L11.4389 1.93952ZM10.9994 3.00063C10.9994 3.39862 11.1575 3.78031 11.4389 4.06174L12.8531 2.64752C12.9468 2.74118 12.9994 2.86819 12.9994 3.00063H10.9994ZM11.439 4.06185L14.586 7.20785L16 5.79341L12.853 2.64741L11.439 4.06185ZM15.293 5.50063H5.5V7.50063H15.293V5.50063ZM5.5 5.50063C4.57174 5.50063 3.6815 5.86938 3.02513 6.52576L4.43934 7.93997C4.72064 7.65867 5.10218 7.50063 5.5 7.50063V5.50063ZM3.02513 6.52576C2.36875 7.18214 2 8.07237 2 9.00063H4C4 8.60281 4.15804 8.22128 4.43934 7.93997L3.02513 6.52576ZM2 9.00063V17.0006H4V9.00063H2ZM2 17.0006C2 17.3985 2.15803 17.78 2.43934 18.0613L3.85355 16.6471C3.94732 16.7408 4 16.868 4 17.0006H2ZM2.43934 18.0613C2.72065 18.3426 3.10218 18.5006 3.5 18.5006V16.5006C3.63261 16.5006 3.75978 16.5533 3.85355 16.6471L2.43934 18.0613ZM3.5 18.5006C3.89782 18.5006 4.27935 18.3426 4.56066 18.0613L3.14645 16.6471C3.24022 16.5533 3.36739 16.5006 3.5 16.5006V18.5006ZM4.56066 18.0613C4.84197 17.78 5 17.3985 5 17.0006H3C3 16.868 3.05268 16.7408 3.14645 16.6471L4.56066 18.0613ZM5 17.0006V9.00063H3V17.0006H5ZM5 9.00063C5 8.86802 5.05268 8.74085 5.14645 8.64708L3.73223 7.23287C3.26339 7.70171 3 8.33759 3 9.00063H5ZM5.14645 8.64708C5.24022 8.55331 5.36739 8.50063 5.5 8.50063V6.50063C4.83696 6.50063 4.20107 6.76403 3.73223 7.23287L5.14645 8.64708ZM5.5 8.50063H15.293V6.50063H5.5V8.50063ZM14.586 6.79341L11.439 9.93941L12.853 11.3539L16 8.20785L14.586 6.79341ZM11.4389 9.93952C11.1575 10.2209 10.9994 10.6026 10.9994 11.0006H12.9994C12.9994 11.1331 12.9468 11.2601 12.8531 11.3537L11.4389 9.93952ZM10.9994 11.0006C10.9994 11.3986 11.1575 11.7803 11.4389 12.0617L12.8531 10.6475C12.9468 10.7412 12.9994 10.8682 12.9994 11.0006H10.9994ZM11.4389 12.0617C11.7203 12.3432 12.102 12.5013 12.5 12.5013V10.5013C12.6324 10.5013 12.7595 10.5539 12.8531 10.6475L11.4389 12.0617ZM12.5 12.5013C12.898 12.5013 13.2797 12.3432 13.5611 12.0617L12.1469 10.6475C12.2405 10.5539 12.3676 10.5013 12.5 10.5013V12.5013ZM13.5611 12.0617L17.5611 8.06174L16.1469 6.64752L12.1469 10.6475L13.5611 12.0617Z" fill="#197ACF" mask="url(#path-1-inside-1_1461_958)" />
                                </svg></a></li>
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