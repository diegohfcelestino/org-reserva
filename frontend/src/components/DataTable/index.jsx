import React from 'react'

import './styles.scss'

const DataTable = ({ data }) => {
    return (
        <div className="table-responsive rolagem">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data Inicio</th>
                        <th>Data Fim</th>
                        <th>Hora Inicial</th>
                        <th>Hora Final</th>
                        <th>Funcionário</th>
                        <th>ID Item</th>
                        <th>ID Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {/*<tr>
                         <td>22/06/2021</td>
                        <td>9h30min</td>
                        <td>15h30min</td>
                        <td>João da Silva</td>
                        <td>Veiculo 3</td>
                        <td>Sim</td> */}

                    {data.map(agendamento => {
                        return (
                            <tr key={agendamento.id}>
                                <td>{agendamento.dt_inicio}</td>
                                <td>{agendamento.dt_fim}</td>
                                <td>{agendamento.hr_inicio}</td>
                                <td>{agendamento.hr_final}</td>
                                <td>{agendamento.id_user}</td>
                                <td>{agendamento.id_item}</td>
                                <td>{agendamento.id_tipo}</td>
                            </tr>
                        )
                    })

                    }
                    {/* </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
