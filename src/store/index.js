import { createStore } from 'redux';

const INITIAL_STATE = {
    alimentosselecionados: {}
};

function reducers(state = INITIAL_STATE, action) {
    if(action.type === 'TOGGLE_ALIMENTO'){
        return {alimentosselecionados: action.alimentosselecionados}
    }

    return state;
}

const store = createStore(reducers);

export default store;