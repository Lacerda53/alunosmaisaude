import React, { useState, useEffect } from 'react';
import Loading from '../../../widgets/Loading';
import { Link } from 'react-router-dom';

function Emocional() {
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
                        <progress class="uk-progress margin-progress" value="4" max="6"></progress>
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
                    </div>
                    <div className="uk-text-lead">
                        Como tem sido seu estado <span className="uk-text-bold">emocional</span> nos últimos meses?
                    </div>
                </div>
                <br />
                <br />
                {loading ?
                    (<div className="uk-position-center">
                        <Loading />
                    </div>)
                    :
                    <div>
                        <div className="uk-container uk-margin-large-top">
                            <div className="uk-flex-between uk-flex">
                                <div>
                                    <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/2a28141e37e7790c5117193a2dbaf833a366e6d1/emocional/1.svg" />
                                </div>
                                <div>
                                    <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/2a28141e37e7790c5117193a2dbaf833a366e6d1/emocional/2.svg" />
                                </div>
                                <div>
                                    <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/ecaf506400c968cbbeeb0547974c43b5f5ad6970/emocional/3.svg" />
                                </div>
                                <div>
                                    <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/2a28141e37e7790c5117193a2dbaf833a366e6d1/emocional/4.svg" />
                                </div>
                                <div>
                                    <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bc4fa1d841a5e645a49863adf9ac2990d75596a0/emocional/5.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="uk-container uk-margin-large-top">
                            <div className="uk-flex uk-flex-center uk-flex-between uk-grid">
                                <div className="uk-margin">
                                    <Link to="/janta" className="uk-button uk-text-bold  uk-button-disable uk-button-medium uk-button-default">Anterior</Link>
                                </div>
                                <div className="uk-flex-right uk-flex-center@s">
                                    <Link to="/fisico" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Próximo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Emocional;