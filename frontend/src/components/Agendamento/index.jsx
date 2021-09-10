
import { useState } from "react";

import "./agendamento.scss";

const tipos = [
  { id: "s", desc: "Sala" },
  { id: "v", desc: "Veículo" },
];

export default function Agendamento() {
  const [tipoAg, setTipoAg] = useState("");

  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="container-fluid">
        {/* <div className="d-flex me-auto ">
          <h3 className="lead">Agendamento</h3>
          <p className="lead">{currentDate}</p>
        </div> */}
        {!tipoAg && <p>Escolha entre agendamento de sala ou veículo e verifique a disponibilidade</p>}
        <form>
          <div className="container-fluid justify-content-center col-12 row mb-3">
            <div className="col-auto">
              <label htmlFor="tipo" className="form-label">
                Tipo Agendamento
              </label>
              <select
                name="tipo"
                className="form-select"
                value={tipoAg}
                onChange={(e) => setTipoAg(e.target.value)}
              >
                <option value="">Selecione</option>
                {tipos.map((tp, i) => {
                  return (
                    <option key={i} value={tp.id}>
                      {tp.desc}
                    </option>
                  );
                })}
              </select>
            </div>
            {tipoAg === "v" && (
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
                  <select name="veiculo" className="form-select">
                    <option>Selecione</option>
                    <option>Ford Fiesta - FXN</option>
                    <option>Ford Fiesta - FYT</option>
                    <option>Ford Ka</option>
                  </select>
                </div>
              </>
            )}
            {tipoAg === "s" && (
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
                  <select name="sala" className="form-select">
                    <option>Selecione</option>
                    <option>Sala Menor</option>
                    <option>Sala Maior</option>
                  </select>
                </div>
              </>
            )}
          </div>
          {tipoAg && (
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
