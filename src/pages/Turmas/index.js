import React from 'react';
import { Link } from 'react-router-dom';
import buttonPlus from '../../assets/images/button.svg'
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
                            <h2><b>Turmas</b></h2>
                        </div>
                        <div class="uk-flex">
                            <Link class="uk-button uk-button-medium uk-button-primary uk-text-bold">Cadastrar turma</Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between">
                        <form className="uk-form-stacked uk-width-1-1 uk-margin-large-right">

                            <div className="uk-card uk-card-default uk-card-body uk-border-card">
                                <div className="uk-margin">

                                    <div className="uk-text-large uk-text-orange uk-text-bold">Informações da turma</div>
                                    <div className="uk-text-meta"> Cadastre uma nova turma informando os dados abaixo</div>

                                    <br />
                                    <label className="uk-form-label uk-text-bold" for="form-stacked-text">Nome da turma</label>
                                    <div className="uk-margin-small">
                                        <input className="uk-input uk-form-large" type="text"
                                            placeholder="Digite o nome ou número da turma" />
                                    </div>
                                    <br />
                                    <div className="uk-flex">
                                        <div className="uk-flex-column">
                                            <label className="uk-form-label uk-text-bold" for="form-stacked-text">Número de
                                        alunos</label>

                                            <div className="uk-margin-small">
                                                <input className="uk-input uk-form-large" id="form-stacked-text" type="text"
                                                    placeholder="Ex: 40" />
                                            </div>
                                        </div>

                                        <div className="uk-flex-column">
                                            <label className="uk-form-label uk-text-bold" for="form-stacked-text">Série</label>

                                            <div className="uk-margin-small">
                                                <input className="uk-input uk-form-large" id="form-stacked-text" type="text"
                                                    placeholder="Ex: 6º ano" />
                                            </div>
                                        </div>

                                        <div className="uk-flex-column">
                                            <label className="uk-form-label uk-text-bold" for="form-stacked-text">Ano letivo</label>

                                            <div className="uk-margin-small">
                                                <input className="uk-input uk-form-large" id="form-stacked-text" type="text"
                                                    placeholder="Digite o ano atual" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="uk-width-1-2">
                            <div className="uk-card uk-card-default uk-card-body uk-border-card">
                                <h3><b><span style={{ color: "#14B0B6" }}>Alunos</span></b></h3>
                                <div className="uk-text-meta"> Parece que você não tem alunos adicionados</div>
                                <br/>
                                <div className="uk-flex uk-flex-center">
                                    <Link className="uk-flex uk-text-center uk-flex-column">
                                        <img src={buttonPlus} width="100" />
                                        <span style={{ color: "#14B0B6" }}>Adicionar alunos</span>
                                    </Link>
                                </div>
                            </div>
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
