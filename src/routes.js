import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GameInicio from './pages/Game/Inicio/index.js'
import GameManha from './pages/Game/Manha/index.js'
import GameAlmoco from './pages/Game/Almoco/index.js'
import GameJanta from './pages/Game/Janta/index.js'
import GameEmocional from './pages/Game/Emocional/index.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={GameInicio} />
                <Route path="/manha" component={GameManha} />
                <Route path="/almoco" component={GameAlmoco} />
                <Route path="/janta" component={GameJanta} />
                <Route path="/emocional" component={GameEmocional} />
            </Switch>
        </BrowserRouter>
    );
}