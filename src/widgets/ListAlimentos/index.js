import React from 'react';

function ListAlimentos({alimento}) {
    return (
        <div className="uk-flex uk-flex-between">
            <button href="" className="uk-flex-left" uk-icon="icon: chevron-left; ratio: 1.8"></button>
            {alimento.map(a => (
                <div className="uk-text-center uk-flex-colum">
                    <img src={a.icon} width="71" />
                    <br />
                    <span className="uk-text-bold">{a.nome}</span>
                </div>
            ))}
            <button className="uk-flex-right" uk-icon="icon: chevron-right; ratio: 1.8"></button>
        </div>
    );
}

export default ListAlimentos;