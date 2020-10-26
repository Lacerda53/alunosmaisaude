import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../widgets/NavBar';


function DetalhesTurma() {
    return (
        <div>
            <NavBar />
            <div className="uk-backgroundColor uk-full">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between uk-margin-large-top">
                        <div className="uk-text-large">
                            <h2><strong>Turma 3012</strong></h2>
                        </div>
                        <div className="uk-flex">
                            <Link to="/turmas" className="uk-button uk-button-primary uk-text-bold uk-button-medium"><span uk-icon="icon: arrow-left"></span> Voltar</Link>
                        </div>
                    </div>
                    <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-border-card">
                        <table className="uk-table uk-table uk-table-striped">
                            <thead>
                                <tr>
                                    <th><b>Informações</b></th>
                                    <th>Série: 9º ano</th>
                                    <th>Número de alunos: 25</th>
                                    <th>Ano letivo: 2020</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-border-card">
                        <h3><b><span style={{color: "#14B0B6"}}>Alunos</span></b></h3>
                        <table className="uk-table">
                            <table className="uk-table uk-table uk-table-striped">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Peso</th>
                                        <th>Altura</th>
                                        <th>Medida da cintura</th>
                                        <th>Status Avaliação</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aline de Souza Vieira</td>
                                        <td>50kg</td>
                                        <td>1,60cm</td>
                                        <td>90cm</td>
                                        <td><span>Realizada</span></td>
                                        <td><span uk-icon="more-vertical"></span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Artur Nascimento</td>
                                        <td> - </td>
                                        <td> - </td>
                                        <td> - </td>
                                        <td>Não Realizada</td>
                                        <td><Link to="/avaliacao" class="uk-icon-button uk-button-primary" uk-icon="forward"></Link></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Bruna Carvalho Guimarães</td>
                                        <td>50kg</td>
                                        <td>1,60cm</td>
                                        <td>90cm</td>
                                        <td>Realizada</td>
                                        <td><span uk-icon="more-vertical"></span></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td>Caio Ribeiro</td>
                                        <td>50kg</td>
                                        <td>1,60cm</td>
                                        <td>90cm</td>
                                        <td>Realizada</td>
                                        <td><span uk-icon="more-vertical"></span></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetalhesTurma;