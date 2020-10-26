import React from 'react';

import { Link } from 'react-router-dom';
import logoSvg from '../../assets/images/logo2.svg';

function NavBar() {
    return (
        <header>
            <div class="uk-container">
                <nav class="uk-navbar uk-navbar">
                    <div class="uk-navbar-left">
                        <div class="uk-navbar-item uk-logo">
                            <Link to="/">
                                <img src={logoSvg} />
                            </Link>
                        </div>
                    </div>

                    <div class="uk-navbar-right">
                        <button class="uk-icon-button uk-hidden@m uk-icon" uk-icon="menu"
                            uk-toggle="target: #side-menu"><svg width="20" height="20" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg" data-svg="menu">
                                <rect x="2" y="4" width="16" height="1"></rect>
                                <rect x="2" y="9" width="16" height="1"></rect>
                                <rect x="2" y="14" width="16" height="1"></rect>
                            </svg></button>
                        <ul class="uk-navbar-nav uk-visible@m">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/turmas">Turmas</Link></li>
                            <li><a >Ajuda</a></li>
                            <li><Link to="/game">Game</Link></li>
                        </ul>
                    </div>
                </nav>
                <div id="side-menu" class="uk-offcanvas" uk-offcanvas="flip: true">
                    <div class="uk-offcanvas-bar">
                        <button class="uk-offcanvas-close uk-icon uk-close" type="button" uk-close=""><svg width="14"
                            height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon">
                            <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                            <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                        </svg>
                        </button>

                        <div class="uk-flex uk-flex-column uk-height-1-1">
                            <div>
                                <img data-src="images/logo.svg" width="46" uk-img="" alt="guaratech" />
                                <br />
                                <br />
                                <ul class="uk-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/turmas">Turmas</Link></li>
                                    <li><a >Ajuda</a></li>
                                    <li><Link className="uk-button-game" to="/game">Game</Link></li>
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