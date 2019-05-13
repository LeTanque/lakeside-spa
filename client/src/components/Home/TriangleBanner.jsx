import React, { Component } from 'react'

class TriangleBanner extends Component {
    render() {
        return (
            <>
                <section>
                    <svg 
                        id="triangle-div" 
                        className="" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 100 10" 
                        preserveAspectRatio="xMaxYMin slice"
                        >
                        <path 
                            style="
                                fill:#dddddd;
                                fill-opacity:1;
                                stroke:#dddddd;
                                stroke-width:0;
                                stroke-linejoin:miter;
                                stroke-miterlimit:4;
                                stroke-dasharray:none;
                                stroke-dashoffset:0;
                                stroke-opacity:0.66666669;
                                paint-order:stroke fill markers;
                                opacity:1"
                            d="M 46.662131,0 44.978507,1.7801408 H 0.01272968 L 0,10.2 H 100 L 99.9887,1.7801408 H 55.167384 L 53.479843,0.00361553 51.779088,1.7801408 50.074413,0 48.368761,1.7801408 Z" />
                    </svg>
                </section>
            </>
        );
    }
}

export default TriangleBanner