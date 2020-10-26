import React, {useState, useEffect} from 'react';

function ListAlimentos({alimento}) {
    return (
        <div className="uk-flex uk-flex-between">
            <button href="" className="uk-flex-left" uk-icon="icon: chevron-left; ratio: 1.8"></button>
            {alimento.map(a => (
                <div style={{cursor: "pointer"}} className="uk-text-center uk-flex-colum">
                    <img src={a.icon} width={a.nome == "Suco"? 50 :70}/>
                    <br />
                    <span className="uk-text-bold">{a.nome}</span>
                </div>
            ))}
            <button className="uk-flex-right" uk-icon="icon: chevron-right; ratio: 1.8"></button>
        </div>
    );
}

export default ListAlimentos;