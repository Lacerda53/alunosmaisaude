import React from 'react';
import NavBar from '../../widgets/NavBar';
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <NavBar />
      <div className="uk-backgroundColor uk-full-navbar">
        <div className="uk-container">
            <div className="uk-position-center uk-text-center">
                <img src={logo} />
                <br/>
                <h1 className="uk-margin-remove">Seja bem vindo,<strong> Professor!</strong></h1>
                <br/>
                <br/>
                <div className="uk-flex uk-flex-center uk-grid">
                    <div className="uk-margin">
                        <Link to="/game" className="uk-button uk-button-primary uk-button-medium uk-text-bold">Começar Game</Link>
                    </div>
                    <div>
                        <Link to="/turmas" className="uk-button uk-button-medium uk-button-default uk-text-bold">Turmas</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;