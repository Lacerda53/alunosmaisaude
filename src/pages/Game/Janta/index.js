import React, { useState, useEffect } from 'react';
import liquido from '../../../services/liquidos.json'
import carboidratos from '../../../services/proteinas_e_carboidratos.json'
import verduras from '../../../services/verduras.json'
import ListAlimentos from '../../../widgets/ListAlimentos';
import { Link } from 'react-router-dom';
import Loading from '../../../widgets/Loading';

function Janta() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <progress class="uk-progress margin-progress" value="3" max="6"></progress>
                        <Link to="/" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></Link>
                    </div>
                    <div className="uk-text-lead">
                        O que você mais come em seu <span className="uk-text-bold">Janta?</span>
                    </div>
                </div>
                <br />
                <div className="uk-container">
                    {loading ?
                        (<div className="uk-position-center">
                            <Loading />
                        </div>)
                        :
                        <div>
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
                                    Proteinas e Carboidratos
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
                                    <button className="uk-button uk-border-rounded uk-button-large uk-button-danger uk-text-bold uk-width-1-1">
                                        <div className="uk-flex-center">
                                            <span className="" uk-icon="icon: close"></span> Não costumo tomar café
                            </div>
                                    </button>
                                </div>
                            </div>
                            <br /><br />
                            <div className="uk-container">
                                <div className="uk-flex uk-flex-center uk-flex-between uk-grid">
                                    <div className="uk-margin">
                                        <Link to="/almoco" className="uk-button uk-text-bold  uk-button-disable uk-button-medium uk-button-default">Anterior</Link>
                                    </div>
                                    <div className="uk-flex-right uk-flex-center@s">
                                        <Link to="/emocional" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Próximo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Janta;