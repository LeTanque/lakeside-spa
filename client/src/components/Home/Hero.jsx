import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';

import heroImage from '../../assets/img/backgrounds/MKw-02-01.jpg';
import logo from '../../assets/img/logos/lakeside-complete-clear.png'



class Hero extends Component {
    render() {
        return (
            <>
                <LazyHero 
                    imageSrc={heroImage}
                    className='hero-container'
                    color='#fff'
                    opacity={0.10}
                    isFixed={false}
                    minHeight='calc(75vh - 86px)'
                    parallaxOffset={420}
                    transitionDuration={900}
                >
                    <img src={logo} className='hero-logo' alt='Lakeside logo' />
                </LazyHero>
            </>
        );
    }
}

export default Hero