import React from 'react';
import liquido from '../../../services/liquidos.json'
import carboidratos from '../../../services/proteinas_e_carboidratos.json'
import verduras from '../../../services/verduras.json'
import ListAlimentos from '../../../widgets/ListAlimentos';
import { Link } from 'react-router-dom';

function Almoco() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <progress class="uk-progress margin-progress" value="2" max="6"></progress>
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
                    </div>
                    <div className="uk-text-lead">
                        O que você mais come em seu <span className="uk-text-bold">Almoço?</span>
                    </div>
                </div>
                <br />
                <div className="uk-container">
                    <div className="uk-text-meta">
                        líquidos
                </div>
                    <br />
                    <ListAlimentos alimento={liquido} />
                </div>
                <br />
                <div className="uk-container">
                    <div className="uk-text-meta">
                        Proteínas e Carboidratos
            </div>
                    <br />
                    <ListAlimentos alimento={carboidratos} />
                </div>
                <br />
                <div className="uk-container">
                    <div className="uk-text-meta">
                        Verduras
            </div>
                    <br />
                    <ListAlimentos alimento={verduras} />
                </div>
                <br />
                <div className="uk-container">
                    <div class="">
                        <button className="uk-button uk-border-rounded uk-button-large uk-text-bold uk-width-1-1">
                            <div className="uk-flex-center">
                                <span className="" uk-icon="icon: close"></span> Não costumo tomar café
                    </div>
                        </button>
                    </div>
                </div>
                <br />
                <div className="uk-container">
                    <div className="uk-flex uk-flex-center uk-flex-between uk-grid">
                        <div className="uk-margin">
                            <Link to="/manha" className="uk-button uk-text-bold  uk-button-disable uk-button-medium uk-button-default">Anterior</Link>
                        </div>
                        <div className="uk-flex-right uk-flex-center@s">
                            <Link to="/janta" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Próximo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Almoco;