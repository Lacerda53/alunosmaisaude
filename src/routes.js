import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GameInicio from './pages/Game/Inicio/index.js'
import GameManha from './pages/Game/Manha/index.js'
import GameAlmoco from './pages/Game/Almoco/index.js'
import GameJanta from './pages/Game/Janta/index.js'
import GameEmocional from './pages/Game/Emocional/index.js'
import GameFisico from './pages/Game/Fisico/index.js'
import GameParabens from './pages/Game/Parabens/index.js'
import Inicio from './pages/Home/index.js'
import Turmas from './pages/Turmas/index.js'
import DetalhesTurma from './pages/DetalhesTurma/index.js'
import Avaliacao from './pages/Avaliacao/index.js'
import Dashboard from './pages/Dashboard/index.js'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/game" component={GameInicio} />
                <Route path="/manha" component={GameManha} />
                <Route path="/almoco" component={GameAlmoco} />
                <Route path="/janta" component={GameJanta} />
                <Route path="/emocional" component={GameEmocional} />
                <Route path="/fisico" component={GameFisico} />
                <Route path="/parabens" component={GameParabens} />
                <Route path="/turmas" component={Turmas} />
                <Route path="/detalhesTurma" component={DetalhesTurma} />
                <Route path="/avaliacao" component={Avaliacao} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}