import React, { useState } from 'react';
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

// import { useAgendamento } from '../../context/AgendamentoContext';

import BarChart from '../../components/BarChart';
import DonutChart from '../../components/DonutChart';
import DataTable from '../../components/DataTable';
import Agendamento from '../../components/Agendamento'
import { useAuth } from '../../context/Auth';
import { useAgendamento } from '../../context/AgendamentoContext';

export default function HomeAgendamentos() {
  const [showAgendar, setShowAgendar] = useState(true)
  const { user } = useAuth()
  const { agendamentos } = useAgendamento()

  const domain = user.email.includes('@orgsystem.com.br')


  const currentDate = format(new Date(), "eeee, dd/MM/yyyy", {
    locale: ptBr,
  });

  function handleAgendar() {
    setShowAgendar(!showAgendar)
  }

  return (
    <div className="container">
      <h1 className="text-primary py-3">Agendamentos</h1>
      <div className="d-flex align-items-center navbar p-3 mb-3">
        <h6 className="text-dark lead">{currentDate}</h6>
        <h6>Usuário: {user.user_metadata.name}</h6>
        <button
          className="btn btn-outline-dark"
          onClick={handleAgendar}
        >
          {showAgendar ? "Exibir gráficos de uso" : "Realizar Agendamento"}
        </button>
      </div>

      {/* {JSON.stringify(agendamentos)} */}

      {!showAgendar ? (
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center test-secondary">Uso dos veiculos (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center test-secondary">Uso das Salas (%)</h5>
            <DonutChart />
          </div>
        </div>
      ) :
        <Agendamento />
      }

      <div className="py-3">
        <h3 className="text-primary">Agendamentos Realizados</h3>
      </div>

      <DataTable data={
        domain ? agendamentos : ''
      } />
    </div>

  )
}

