import React, { Component } from 'react'

import Hero from './Hero.jsx'
import WaveyBanner from './WaveyBanner.jsx';
import TaglineBanner from './TaglineBanner.jsx';



class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <WaveyBanner />
                <TaglineBanner />
            </>
        );
    }
}




export default Home


