import { useState } from 'react';
import Agendamento from '../../components/Agendamento';
import BarChart from '../../components/BarChart';
import DataTable from '../../components/DataTable';
import { useAgendamento } from '../../context/AgendamentoContext';
import { useAuth } from '../../context/Auth';
import { supabase } from '../../supabaseClient';



export default function HomeAgendamentos() {
  const [showAgendar, setShowAgendar] = useState(true)
  const { user } = useAuth()
  const { calculaHoras, agendamentos, renderHora } = useAgendamento()
  const [totalHoras, setTotalHoras] = useState([])
  const [categories, setCategories] = useState([])
  const [series, setSeries] = useState([])

  const domain = user.email.includes('@orgsystem.com.br')

  function handleAgendarOff() {
    getTotalHoras()
    setShowAgendar(false)
  }
  function handleAgendarOn() {
    setTotalHoras([])
    setShowAgendar(true)
  }

  const getTotalHoras = async () => {
    const { data: items } = await supabase
      .from('items')
      .select('*')
      .order("id", { ascending: true });

    const { data: agendamentos } = await supabase
      .from("agendamentos")
      .select(`
        *,
        items(description)
      `)
    let total_horas = 0
    for (let i = 0; i < items.length; i++) {
      const agendadosPorItem = agendamentos.filter(s => s.id_item === items[i].id)
      //console.log(agendadosPorItem)
      if (agendadosPorItem.length > 0) {
        for (let i = 0; i < agendadosPorItem.length; i++) {
          const horas = calculaHoras(agendadosPorItem[i].hr_final, agendadosPorItem[i].hr_inicio)
          total_horas += horas
          /* const data = agendadosPorItem[i].dt_inicio + ' ' + agendadosPorItem[i].hr_inicio
          console.log(data)
          console.log(hoursToMinutes(data)) */
          // console.log(agendadosPorItem[i].dt_fim)
        }
        const newData = totalHoras
        newData.push({
          id_item: items[i].id,
          description: items[i].description,
          duration: renderHora(total_horas)
        })
        setTotalHoras(newData)

        total_horas = 0
      }
    }

    const desc = [],
      perc = []
    for (let i = 0; i < totalHoras.length; i++) {
      desc.push(totalHoras[i].description)
      perc.push(totalHoras[i].duration)
    }
    setCategories(desc)
    setSeries(perc)
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
        {!showAgendar ? (
          <button
            className="btn btn-outline-dark"
            onClick={handleAgendarOn}
          >
            Realizar Agendamento
          </button>
        ) : (
          <button
            className="btn btn-outline-dark"
            onClick={handleAgendarOff}
          >
            Exibir gráficos de uso
          </button>
        )}
      </div>

      {!showAgendar ? (
        <div className="row px-3">
          <div /* className="col-sm-6" */>
            <h5 className="text-center test-secondary">Gráfico de uso (horas)</h5>
            <BarChart categories={categories} series={series} />
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