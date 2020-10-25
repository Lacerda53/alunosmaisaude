import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../widgets/NavBar';

// import { Container } from './styles';

function Turmas() {
    return (
        <div>
            <NavBar />
            <div class="uk-backgroundColor uk-full-navbar">
                <div class="uk-container">
                    <br />
                    <div class="uk-flex uk-flex-between uk-margin-top">
                        <div class="uk-text-large">
                            Turmas
                </div>
                        <div class="uk-flex">
                            <Link class="uk-button uk-button-medium uk-button-primary uk-text-bold">Cadastrar turma</Link>
                        </div>
                    </div>
                </div>
                <div class="uk-container uk-margin-large-top">
                    <div class="uk-flex uk-flex-between">
                        <div class="uk-card uk-card-default uk-card-large uk-card-hover uk-card-body uk-border-card">
                            <h3>Turma <span class="uk-text-bold">3012</span></h3>
                            <p>Série: 6º ano</p>
                            <p>Número de alunos:25</p>
                            <p>Ano Letivo: 2020</p>
                            <Link to="/detalhesTurma" class="uk-button uk-button-medium uk-button-default">Acessar</Link>
                        </div>

                        <div class="uk-card uk-card-default uk-card-large uk-card-hover uk-card-body uk-border-card">
                            <h3 class="uk-card-title">Turma <span class="uk-text-bold">6070</span></h3>
                            <p>Série: 6º ano</p>
                            <p>Número de alunos:25</p>
                            <p>Ano Letivo: 2020</p>
                            <div class="uk-flex uk-flex-left">
                                <Link to="/detalhesTurma" class="uk-button uk-button-medium uk-button-default">Acessar</Link>
                            </div>
                        </div>

                        <div class="uk-card uk-card-default uk-card-large uk-card-hover uk-border-card uk-card-body">

                            <h3 class="uk-card-title">Turma <span class="uk-text-bold">4067</span></h3>
                            <p>Série: 6º ano</p>
                            <p>Número de alunos:25</p>
                            <p>Ano Letivo: 2020</p>
                            <div class="uk-flex uk-flex-left">
                                <Link to="/detalhesTurma" class="uk-button uk-button-medium uk-button-default">Acessar</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}

export default Turmas;
