import React from 'react';
import BarChart from '../../components/BarChart';
import DonutChart from '../../components/DonutChart';
import DataTable from '../../components/DataTable';

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Agendamentos</h1>

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

      <div className="py-3">
        <h2 className="text-primary">Todos Agendamentos</h2>
      </div>

      <DataTable />
    </div>

  )
}

