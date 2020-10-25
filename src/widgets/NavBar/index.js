import React from 'react';

import { Link } from 'react-router-dom';
import logoSvg from '../../assets/images/Logo.svg';

function NavBar() {
    return (
        <header>
            <div className="uk-container">
                <nav className="uk-navbar uk-navbar">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item uk-logo">
                            <img src={logoSvg} width="180" uk-svg />
                        </div>
                    </div>

                    <div className="uk-navbar-right">
                        <button class="uk-icon-button uk-hidden@m uk-icon" uk-icon="menu" uk-toggle="target: #side-menu"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="menu"><rect x="2" y="4" width="16" height="1"></rect><rect x="2" y="9" width="16" height="1"></rect><rect x="2" y="14" width="16" height="1"></rect></svg></button>
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li ><Link to="/home" >Início</Link></li>
                            <li ><Link uk-scroll>Treinamentos</Link></li>
                            <li ><Link uk-scroll>Meus Treinamentos</Link></li>
                            <li >
                                <Link uk-scroll>
                                    <img src="https://avatars3.githubusercontent.com/u/33927459?s=460&u=ffd736cdc59e9beed32a4ffb22548cd6fe64c08d&v=4" width="55" uk-svg />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="side-menu" className="uk-offcanvas" uk-offcanvas="flip: true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close uk-icon uk-close" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>

                        <div className="uk-flex uk-flex-column uk-height-1-1">
                            <div>
                                <img data-src={logoSvg} uk-img="" alt="guaratech" />
                                <br />
                                <br />
                                <ul className="uk-nav">
                                    <li ><Link to="/home" >Início</Link></li>
                                    <li ><Link uk-scroll>Treinamentos</Link></li>
                                    <li ><Link uk-scroll>Meus Treinamentos</Link></li>
                                    <li >
                                        <Link uk-scroll>
                                            <img src="https://avatars3.githubusercontent.com/u/33927459?s=460&u=ffd736cdc59e9beed32a4ffb22548cd6fe64c08d&v=4" width="55" uk-svg />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;