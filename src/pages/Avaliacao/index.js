import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../widgets/NavBar';

// import { Container } from './styles';

function Avaliacao() {
    return (
        <div>
            <NavBar />
            <div className="uk-backgroundColor uk-full">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-between uk-margin-large-top">
                        <div className="uk-text-large">
                            <h2><strong>Aluno(a)</strong></h2>
                        </div>
                        <div className="uk-flex">
                            <Link to="/detalhesTurma" className="uk-button uk-button-primary uk-text-bold uk-button-medium"><span uk-icon="icon: arrow-left"></span> Voltar</Link>
                        </div>
                    </div>



                    <div className="uk-card uk-card-default uk-card-body uk-border-card uk-margin-large-top">
                        <h3><strong><span style={{ color: "#14B0B6" }}>Aluno(a):</span> Arthur Nascimento Nunes</strong></h3>

                        <h4>Instruções</h4>
                        <div>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum."
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <table className="uk-table uk-table-divider">
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Peso do aluno<br />(em kg)</b>
                                        <div className="uk-placeholder">Ex:50 kg</div>
                                    </td>
                                    <td>
                                        <b>Altura do aluno<br />(em m)</b>
                                        <div className="uk-placeholder">Ex:1.60 m</div>
                                    </td>
                                    <td>
                                        <b>Medida da cintura<br />(em cm)</b>
                                        <div className="uk-placeholder">Ex:53 cm</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="uk-flex uk-flex-right">
                            <Link to="/detalhesTurma" className="uk-button uk-button-medium uk-button-orange">Cadastrar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Avaliacao;