import React from 'react'

import './Hero.css'
import hand_icon from '../Assets/hand-icon.png'
import Arrow_icon from '../Assets/Arrow-icon.png'
import Hero_image from '../Assets/Hero-image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={Arrow_icon} alt="" />
                </div>
            </div>

            <div className="hero-right">
                <img src={Hero_image} alt="" />
            </div>

        </div>



    )
}

export default Hero
