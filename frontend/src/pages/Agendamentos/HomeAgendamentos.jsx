import React, { useState } from 'react';
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import BarChart from '../../components/BarChart';
import DonutChart from '../../components/DonutChart';
import DataTable from '../../components/DataTable';
import Agendamento from '../../components/Agendamento'

export default function HomeAgendamentos() {
  const [showAgendar, setShowAgendar] = useState(true)

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
        <p className="text-dark lead">{currentDate}</p>
        <button
          className="btn btn-outline-dark"
          onClick={handleAgendar}
        >
          {showAgendar ? "Exibir Gráficos" : "Agendar"}
        </button>
      </div>

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
        <h2 className="text-primary">Todos Agendamentos</h2>
      </div>

      <DataTable />
    </div>

  )
}

