import React from 'react';
import bar from '../../../assets/images/bar.svg'
import pointer from '../../../assets/images/pointer.svg'
import { Link } from 'react-router-dom';

function Parabens() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <progress class="uk-progress margin-progress" value="6" max="6"></progress>
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
                    </div>
                </div>
                <br />
                <div className="uk-container uk-flex uk-flex-column uk-text-center uk-width-1-2">
                    <div>
                        <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bc4fa1d841a5e645a49863adf9ac2990d75596a0/emocional/5.svg" width="150" />
                    </div>
                    <div className="uk-text-lead uk-text-bold">
                        Parabéns!
                    </div>
                    <div className="uk-text-large uk-text-success">
                        Você tem uma ótima alimentação
                    </div>
                    <div>
                        <div className="uk-bom uk-margin-auto">
                            <div className="uk-text-right">
                                <img src={pointer} width="30" />
                            </div>
                        </div>
                        <img src={bar} />
                    </div>
                    <div className="uk-text-emphasis">
                        Sua alimentação é <span className="uk-text-bold">90% saudável</span>
                    </div>
                    <div className="uk-text-muted uk-text-medium  uk-text-center uk-text-bold">
                        Pontuação baseada nos marcadores de consumo alimentar do ministério da Saúde.
                    </div>
                    <div className="uk-container uk-margin-top">
                        <Link to="/" className="uk-button uk-text-bold uk-button-medium uk-button-primary">Concluir</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parabens;