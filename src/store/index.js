import { createStore } from 'redux';

const INITIAL_STATE = {
    taskselect: {}
};

function reducers(state = INITIAL_STATE, action) {
    if(action.type === 'TOGGLE_TASK'){
        return {taskselect: action.taskselect}
    }

    return state;
}

const store = createStore(reducers);

export default store;