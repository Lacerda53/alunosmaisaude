import React from 'react';
import liquido from '../../../services/liquidos.json'
import carboidratos from '../../../services/proteinas_e_carboidratos.json'
import verduras from '../../../services/verduras.json'
import ListAlimentos from '../../../widgets/ListAlimentos';
import { Link } from 'react-router-dom';

function Janta() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <progress class="uk-progress margin-progress" value="3" max="6"></progress>
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
                    </div>
                    <div className="uk-text-lead">
                        O que você mais come em seu <span className="uk-text-bold">Janta?</span>
                    </div>
                </div>
                <br />
                <br />
                <div className="uk-container">
                    <div className="uk-text-meta">
                        líquidos
                </div>
                    <br /><br />
                    <ListAlimentos alimento={liquido} />
                </div>
                <br /><br />
                <div className="uk-container">
                    <div className="uk-text-meta">
                        Proteínas e Carboidratos
            </div>
                    <br /><br />
                    <ListAlimentos alimento={carboidratos} />
                </div>
                <br /><br />
                <div className="uk-container">
                    <div className="uk-text-meta">
                        Verduras
            </div>
                    <br /><br />
                    <ListAlimentos alimento={verduras} />
                </div>
                <br /><br />
                <div className="uk-container">
                    <div class="">
                        <button className="uk-button uk-border-rounded uk-button-large uk-text-bold uk-width-1-1">
                            <div className="uk-flex-center">
                                <span className="" uk-icon="icon: close"></span> Não costumo tomar café
                    </div>
                        </button>
                    </div>
                </div>
                <br /><br />
                <div className="uk-container uk-flex uk-flex-between">
                    <div className="uk-flex-left">
                        <Link to="/almoco" className="uk-button uk-text-bold uk-button-disable uk-button-medium uk-button-default">Anterior</Link>
                    </div>
                    <div className="uk-flex-right">
                        <Link to="/emocinal" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Próximo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Janta;