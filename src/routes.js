import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GameInicio from './pages/Game/Inicio/index.js'
import GameManha from './pages/Game/Manha/index.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={GameInicio} />
                <Route path="/manha" component={GameManha} />
            </Switch>
        </BrowserRouter>
    );
}