import React, {useState, useEffect} from 'react';

function ListAlimentos({alimento}) {
    const [valor, setvalor] = useState();
    const [estilo, setestilo] = useState();

    useEffect(()=>{
        console.log(valor)
    },[valor]);

    function togleIcon(item, e){
        console.log(e.target);
        setvalor(item.nome);
        setestilo({border: "3px dashed #14B0B6"});
    }
    return (
        <div className="uk-flex uk-flex-between">
            <button href="" className="uk-flex-left" uk-icon="icon: chevron-left; ratio: 1.8"></button>
            {alimento.map(a => (
                <div style={estilo} className="uk-text-center uk-flex-colum" onClick={(e)=>togleIcon(a,e)}>
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