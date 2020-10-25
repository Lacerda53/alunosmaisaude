import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
function Inicio() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container uk-flex-colum">
                    <div className="uk-float-right">
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget turpis et neque auctor
                            congue et sit amet velit. Praesent eu vestibulum risus. Mauris id velit a eros congue molestie.
                            Pellentesque tempor, erat vitae finibus pulvinar, nibh magna.
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