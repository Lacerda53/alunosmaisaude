import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
function Inicio() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container uk-flex-colum">
                    <div className="uk-float-right">
                        <Link to="/" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></Link>
                    </div>
                    <div className="uk-position-center uk-text-center">
                        <div>
                            <img src={logo} />
                        </div>
                        <br />
                        <div className="uk-text-lead uk-text-bold">
                            Vamos analisar seus hábitos alimentares
                    </div>
                        <div className="uk-align-center uk-width-1-2">
                            Responda às perguntas a seguir e iremos pontuar seus hábitos alimentares ao final.
                            É importante responder baseado em sua realidade.
                    </div>
                        <div className="uk-align-center uk-text-bold uk-width-1-2">
                            Todas as informações são baseadas nos marcadores de consumo alimentar e no guia alimentar da população brasileira, ambos do Ministério da Saúde.
                    </div>
                        <div>
                            <Link to="/manha" className="uk-button uk-button-primary 
                        uk-text-bold uk-button-medium uk-margin-rounded"
                                href="">Começar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;