import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

const tipos = [
  { id: 's', desc: 'Sala' },
  { id: 'v', desc: 'Veículo' }
]

export default function Agendamento() {
  const datePt = format(new Date(), 'dd/MM/yyyy', { locale: ptBr })

  const [tipoAg, setTipoAg] = useState('')



  return (
    <div className="container-fluid">
      <h2>Agendamento</h2>
      <div className="container-fluid mb-3">
        <p>Data: {datePt}</p>
        <form >
          <div className="col-12 row">
            <div className="col-auto">
              <label htmlFor="user" className="form-label">Usuário</label>
              <input type="text" disabled class="form-control" value="Usuário" />
            </div>
            <div className="col-auto">
              <label htmlFor="tipo" className="form-label">Tipo Agendamento</label>
              <select
                name="tipo"
                className="form-select"
                value={tipoAg}
                onChange={e => setTipoAg(e.target.value)}
              >
                <option>Selecione</option>
                {tipos.map((tp, i) => {
                  return (
                    <option key={i} value={tp.id}>{tp.desc}</option>
                  )
                })}
              </select>
            </div>
            {tipoAg === 'v' && (
              <>
                <div className="col-auto">
                  <label htmlFor="data_inicio" className="form-label">Data Inicio</label>
                  <input type="date" name="data_inicio" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="data_fim" className="form-label">Data Fim</label>
                  <input type="date" name="data_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_inicio" className="form-label">Hora Inicio</label>
                  <input type="time" name="hora_inicio" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_fim" className="form-label">Hora Fim</label>
                  <input type="time" name="hora_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="veiculo" className="form-label">Veículo</label>
                  <select name="veiculo" className="form-select">
                    <option>Selecione</option>
                    <option>Ford Fiesta - FXN</option>
                    <option>Ford Fiesta - FYT</option>
                    <option>Ford Ka</option>
                  </select>
                </div>
              </>
            )}
            {tipoAg === 's' && (
              <>
                <div className="col-auto">
                  <label htmlFor="data" className="form-label">Data</label>
                  <input type="date" name="data_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_inicio" className="form-label">Hora Inicio</label>
                  <input type="time" name="hora_inicio" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_fim" className="form-label">Hora Fim</label>
                  <input type="time" name="hora_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="sala" className="form-label">Sala</label>
                  <select name="sala" className="form-select">
                    <option>Selecione</option>
                    <option>Sala Menor</option>
                    <option>Sala Maior</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}