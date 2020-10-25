import React from 'react';

import { Link } from 'react-router-dom';

function Emocional() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    
                </div>
                <div className="uk-container uk-flex uk-flex-between">
                    <div className="uk-flex-left">
                        <Link to="/janta" className="uk-button uk-text-bold uk-button-disable uk-button-medium uk-button-default">Anterior</Link>
                    </div>
                    <div className="uk-flex-right">
                        <Link to="/fisico" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Próximo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Emocional;