import { useState } from 'react';
import Agendamento from '../../components/Agendamento';
import BarChart from '../../components/BarChart';
import DataTable from '../../components/DataTable';
import DonutChart from '../../components/DonutChart';
import { useAgendamento } from '../../context/AgendamentoContext';
import { useAuth } from '../../context/Auth';



export default function HomeAgendamentos() {
  const [showAgendar, setShowAgendar] = useState(true)
  const { user } = useAuth()
  const { agendamentos } = useAgendamento()

  const domain = user.email.includes('@orgsystem.com.br')

  function handleAgendar() {
    setShowAgendar(!showAgendar)
  }


  return (
    <div className="container">
      <div className="d-flex align-items-center navbar p-3 mb-3">
        <h1 /* className="text-primary py-3" */
          style={{
            fontSize: '3rem',
            fontFamily: "Ubuntu Condensed, sans-serif",
            fontWeight: '700',
            marginTop: '0.8rem',
            color: '#2b2b69'
          }}
        >Agendamentos</h1>
        <button
          className="btn btn-outline-dark"
          onClick={handleAgendar}
        >
          {showAgendar ? "Exibir gráficos de uso" : "Realizar Agendamento"}
        </button>
        {/* <button
          className="btn btn-outline-dark"
          onClick={e => setOpenCalendar(!openCalendar)}
        >
          Calendário
        </button> */}
      </div>

      {!showAgendar ? (
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center test-secondary">Uso dos veiculos (%)</h5>
            <BarChart agendamentos={agendamentos} />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center test-secondary">Uso das Salas (%)</h5>
            <DonutChart />
          </div>
        </div>
      ) :
        <Agendamento />
      }

      {/* {openCalendar && <Calendar />} */}

      <div className="py-3">
        <h3 className="text-primary">Agendamentos Realizados</h3>
      </div>

      <DataTable data={domain ? agendamentos : ''} />
    </div>

  )
}