import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Nav extends Component {
    render() {
        return (
            <>
                <nav>

                    <Link to='/' className='nav-logo'>
                        <div className="icon-lakeside-solo fa-2x"></div>
                    </Link>
                    
                    <div className="nav-social-links" id="navbarSupportedContent">
                        <ul>
                            <li>
                                <a href="https://weedmaps.com/dispensaries/lakeside-herbal-solution">
                                    <i className="icon-weedmaps clight"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://leafly.com/dispensary-info/lakeside-herbal-solution">
                                    <i className="icon-leaf clight"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com/lakesideherbalsolutions">
                                    <i className="fa fa-facebook clight"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/Lakesideherbalsolutions">
                                    <i className="fa fa-instagram clight"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className='navbar'>
                    <ul>
                        <li>
                            <Link to='/'><span className="icon-home3"></span></Link>
                        </li>
                        <li className='italic'>
                            <Link to='/menu'>Menu</Link>
                        </li>
                        <li className='italic'>
                            About
                        </li>
                        <li className='italic'>
                            Contact
                        </li>
                    </ul>
                </section>
            </>
        );
    }
}

export default Nav

