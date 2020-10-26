import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../widgets/NavBar';

function Dashboard() {
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
                        <h3><b><span style={{ color: "#14B0B6" }}>Relatório da turma</span></b></h3>
                        <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/outros/dashboard.svg" alt="" />
                        <h4><b>Alimentos mais consumidos</b></h4>
                        <div className="uk-flex uk-flex-around">
                            <div className="uk-card uk-card-default uk-text-center uk-card-body uk-width-1-6@m">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/alimentos/salgado.svg" alt="" />
                                <p>Salgado</p>
                                <span style={{ color: "#14B0B6" }}>30%</span>
                            </div>
                            <div className="uk-card uk-card-default uk-text-center uk-card-body uk-width-1-6@m">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/alimentos/pao.svg" alt="" />
                                <p>Pão<br />
                                    <span style={{ color: "#14B0B6" }}>30%</span>
                                </p>
                            </div>
                            <div className="uk-card uk-card-default uk-text-center uk-card-body uk-width-1-6@m">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/alimentos/leite.svg" alt="" />
                                <p>Leite<br />
                                    <span style={{ color: "#14B0B6" }}>30%</span>
                                </p>
                            </div>
                            <div className="uk-card uk-card-default uk-text-center uk-card-body uk-width-1-6@m">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/alimentos/biscoito.svg" alt="" />
                                <p>Biscoito recheado<br />
                                    <span style={{ color: "#14B0B6" }}>30%</span>
                                </p>
                            </div>
                        </div>
                        <br />
                        <h4><b>Estado emocional</b></h4>
                        <div className="uk-flex uk-flex uk-flex-around ">
                            <div className="uk-flex uk-flex-column uk-text-center">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/emocional/1.svg" width="120" />
                                <span style={{ color: "#14B0B6" }}>30%</span>
                            </div>
                            <div className="uk-flex uk-flex-column uk-text-center">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/emocional/2.svg" width="120" />
                                <span style={{ color: "#14B0B6" }}>30%</span>
                            </div>
                            <div className="uk-flex uk-flex-column uk-text-center">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/emocional/3.svg" width="120" />
                                <span style={{ color: "#14B0B6" }}>30%</span>
                            </div>
                            <div className="uk-flex uk-flex-column uk-text-center">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/emocional/4.svg" width="120" />
                                <span style={{ color: "#14B0B6" }}>30%</span>
                            </div>
                            <div className="uk-flex uk-flex-column uk-text-center">
                                <img src="https://raw.githubusercontent.com/Lacerda53/Icons-AlunoMaisSaude/bed931ac2986ce170b38d0206f77478bbb52ef03/emocional/5.svg" width="120" />
                                <span style={{ color: "#14B0B6" }}>30%</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;