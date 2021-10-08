import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import React, { useEffect, useState } from "react";
import { dateMask } from "../../services/helper";
import { handleLoad } from "./pontoService";
//import { handleLoad } from "./pontoService";

export default function Ponto() {
  let date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  let firstDay = new Date(y, m, 1);
  let lastDay = new Date(y, m + 1, 0);

  firstDay = format(firstDay, "yyyy-MM-dd");
  lastDay = format(lastDay, "yyyy-MM-dd");

  const [dataInicial, setDataInicial] = useState(firstDay);
  const [dataFinal, setDataFinal] = useState(lastDay);
  const [data, setData] = useState([]);

  const currentDate = format(new Date(), "eeee, dd/MM/yyyy", {
    locale: ptBr,
  });

  useEffect(() => {
    async function getData() {
      const data = await handleLoad();
      setData(data.data);
      console.log("data", data);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Folha de Ponto</h1>
      <div className="d-flex align-items-center navbar p-4 mb-4">
        <h6 className="text-dark lead">{currentDate}</h6>
        <h2>José Da Silva Souza</h2>
        <h6>Numero PIS</h6>
      </div>
      <div className="container-fluid">
        <form>
          <div className="container-fluid justify-content-center col-12 row mb-3">
            <div className="col-auto">
              <label htmlFor="data_inicio" className="form-label">
                Data Inicial
              </label>
              <input
                type="date"
                name="data_inicio"
                className="form-control"
                value={dataInicial}
                onChange={({ target }) => {
                  setDataInicial(target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <label htmlFor="data_fim" className="form-label">
                Data Final
              </label>
              <input
                type="date"
                name="data_fim"
                className="form-control"
                value={dataFinal}
                onChange={({ target }) => {
                  setDataFinal(target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <h6>Nova consulta</h6>
              <button className="btn btn-outline-dark mb-4">Consultar</button>
            </div>
          </div>
        </form>
      </div>
      <div className="table-responsive rolagem">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Entrada 1</th>
              <th>Saída 1</th>
              <th>Entrada 2</th>
              <th>Saída 2</th>
              <th>Entrada 3</th>
              <th>Saída 3</th>
              <th>Total de horas</th>
              <th>Horas Acumuladas</th>
            </tr>
          </thead>
          <tbody>
            {data.map((obj) => (
              <tr>
                <td>{dateMask(obj.data)}</td>
                <td>{obj.periodo1In}</td>
                <td>{obj.periodo1Out}</td>
                <td>{obj.periodo2In}</td>
                <td>{obj.periodo2Out}</td>
                <td>{obj.extrasIn}</td>
                <td>{obj.extrasOut}</td>
                <td>Calcular</td>
                <td>Calcular</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
