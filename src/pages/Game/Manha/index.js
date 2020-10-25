import React from 'react';
import liquido from '../../../services/liquidos.json'
import ListAlimentos from '../../../widgets/ListAlimentos';
function Manha() {
    return (
        <div className="uk-full uk-backgroundColor">
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <progress class="uk-progress margin-progress" value="1" max="6"></progress>
                        <a href="" className="uk-flex-right" uk-icon="icon: close; ratio: 1.4"></a>
                    </div>
                    <div className="uk-text-lead">
                        O que você tem comido ultimamente em seu <span className="uk-text-bold">café da manhã?</span>
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
                <br/><br/>
                <div className="uk-container">
                    <div className="uk-text-meta">
                        líquidos
                    </div>
                    <br /><br />
                    <ListAlimentos alimento={liquido} />
                </div>
            </div>
        </div>
    );
}

export default Manha;