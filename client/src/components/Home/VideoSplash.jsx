import React, { Component } from 'react'
import video from '../../assets/video/red-drops_360p.mp4'



class VideoSplash extends Component {
    render() {
        return (
            <>
                <div
                    className='background-video--page'>
                    <video 
                        className='background-video' 
                        poster='../assets/red-drops-poster.png'
                        autoPlay muted playsInline loop
                    >
                        <source src={video} type='video/mp4' />
                        <source src={video} type='video/ogg' />

                    </video>

                </div>
            </>
        );
    }
}

export default VideoSplash

