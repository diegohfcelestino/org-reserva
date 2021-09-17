
import { useState } from "react";
import { useAgendamento } from "../../context/AgendamentoContext";
import { useItems } from "../../context/cadastros/ItemsContext";

import "./agendamento.scss";

export default function Agendamento() {
  const {
    tiposAg,
    selectedTipo,
    setSelectedTipo,
    selectedItem,
    setSelectedItem,
  } = useAgendamento()
  const { items } = useItems()

  const veiculos = items.filter(el => el.id_tipo === 2)
  const salas = items.filter(el => el.id_tipo === 1)



  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="container-fluid">
        {/* <div className="d-flex me-auto ">
          <h3 className="lead">Agendamento</h3>
          <p className="lead">{currentDate}</p>
        </div> */}
        {!selectedTipo && <p>Escolha entre agendamento de sala ou veículo e verifique a disponibilidade</p>}
        <form>
          <div className="container-fluid justify-content-center col-12 row mb-3">
            <div className="col-auto">
              <label htmlFor="tipo" className="form-label">
                Tipo Agendamento
              </label>
              <select
                name="tipo"
                className="form-select"
                value={tiposAg.id}
                onChange={e => setSelectedTipo(e.target.value)}
              >
                <option value="">Selecione</option>
                {tiposAg.map((tp) => {
                  return (
                    <option key={tp.id} value={tp.id}>
                      {tp.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {selectedTipo === '2' && (
              <>
                <div className="col-auto">
                  <label htmlFor="data_inicio" className="form-label">
                    Data Inicio
                  </label>
                  <input
                    type="date"
                    name="data_inicio"
                    className="form-control"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="data_fim" className="form-label">
                    Data Fim
                  </label>
                  <input type="date" name="data_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_inicio" className="form-label">
                    Hora Inicio
                  </label>
                  <input
                    type="time"
                    name="hora_inicio"
                    className="form-control"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_fim" className="form-label">
                    Hora Fim
                  </label>
                  <input type="time" name="hora_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="veiculo" className="form-label">
                    Veículo
                  </label>
                  <select
                    className="form-select"
                    name="veiculo"
                    value={selectedItem.id}
                    onChange={e => setSelectedItem(e.target.value)}
                  >
                    <option>Selecione</option>
                    {veiculos.map(veiculo => {
                      return (
                        <option key={veiculo.id} value={veiculo.id}>
                          {veiculo.description}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </>
            )}
            {selectedTipo === '1' && (
              <>
                <div className="col-auto">
                  <label htmlFor="data" className="form-label">
                    Data
                  </label>
                  <input type="date" name="data_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_inicio" className="form-label">
                    Hora Inicio
                  </label>
                  <input
                    type="time"
                    name="hora_inicio"
                    className="form-control"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="hora_fim" className="form-label">
                    Hora Fim
                  </label>
                  <input type="time" name="hora_fim" className="form-control" />
                </div>
                <div className="col-auto">
                  <label htmlFor="sala" className="form-label">
                    Sala
                  </label>
                  <select
                    className="form-select"
                    name="veiculo"
                    value={selectedItem.id}
                    onChange={e => setSelectedItem(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {salas.map(sala => {
                      return (
                        <option key={sala.id} value={sala.id}>
                          {sala.description}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </>
            )}
          </div>
          {selectedTipo && (
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Agendar</button>
            </div>
          )}
        </form>
      </div>
      <div className="line mt-2"></div>
    </div>
  );
}
