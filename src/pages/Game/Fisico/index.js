import React from 'react';

import { Link } from 'react-router-dom';

function Fisico() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <progress class="uk-progress margin-progress" value="5" max="6"></progress>
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
                    </div>
                    <div className="uk-text-lead">
                        Quais atividades físicas você pratica?
                    </div>
                </div>
                <br />
                <br />
                <div className="uk-container">
                    <div className="uk-flex-between uk-flex">
                        <div>
                            <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/ecaf506400c968cbbeeb0547974c43b5f5ad6970/exercicios/1.svg" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/ecaf506400c968cbbeeb0547974c43b5f5ad6970/exercicios/2.svg" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/ecaf506400c968cbbeeb0547974c43b5f5ad6970/exercicios/3.svg" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/ecaf506400c968cbbeeb0547974c43b5f5ad6970/exercicios/4.svg" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="uk-container">
                    <div class="">
                        <button className="uk-button uk-border-rounded uk-button-large uk-text-bold uk-width-1-1">
                            <div className="uk-flex-center">
                                <span className="" uk-icon="icon: close"></span> Não pratico atividades físicas
                    </div>
                        </button>
                    </div>
                </div>
                <br />
                <div className="uk-container uk-margin-large-top">
                    <div className="uk-flex uk-flex-center uk-flex-between uk-grid">
                        <div className="uk-margin">
                            <Link to="/emocional" className="uk-button uk-text-bold  uk-button-disable uk-button-medium uk-button-default">Anterior</Link>
                        </div>
                        <div className="uk-flex-right uk-flex-center@s">
                            <Link to="/parabens" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Próximo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fisico;