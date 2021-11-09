import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { calculaHoras, dateMask, renderHora } from "../../services/helper";
import { handleLoad } from "../../services/pontoService";

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

  function limparPesquisa() {
    setDataInicial(firstDay)
    setDataFinal(lastDay)
  }

  useEffect(() => {
    async function getData() {
      const { dataFiltered } = await handleLoad(dataInicial, dataFinal);
      setData(dataFiltered);
    }
    getData();
  }, [dataFinal, dataInicial]);


  function handleHora(obj) {
    if (!obj.periodo1Out || !obj.periodo1In || !obj.periodo2Out || !obj.periodo2In) {
      return '-----'
    }
    const h1 = calculaHoras(obj.periodo1Out, obj.periodo1In)
    const h2 = calculaHoras(obj.periodo2Out, obj.periodo2In)
    return renderHora(h1 + h2)
  }

  return (
    <div className="container">
      <h1 /* className="text-primary py-3" */
        style={{
          fontSize: '3rem',
          fontFamily: "Ubuntu Condensed, sans-serif",
          fontWeight: '700',
          marginTop: '0.8rem',
          color: '#2b2b69'
        }}
      >Folha de Ponto</h1>
      <div className="d-flex align-items-center navbar p-4 mb-4">
        <h3>{data.length === 0 ? 'Carregando...' : data[0].nome}</h3>
        <h6>Numero PIS: {data.length === 0 ? 'Carregando...' : data[0].pispasep}</h6>
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
              <h6>Pesquisa</h6>
              <button
                className="btn btn-outline-dark mb-4"
                onClick={e => {
                  e.preventDefault()
                  limparPesquisa()
                }}
              >
                Mês atual
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="table-responsive rolagem">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th>Data</th>
              <th>Entrada 1</th>
              <th>Saída 1</th>
              <th>Entrada 2</th>
              <th>Saída 2</th>
              <th>Entrada 3</th>
              <th>Saída 3</th>
              <th >Total de horas</th>
              {/* <th>Horas Acumuladas</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((obj, i) => (
              <tr key={i} className="text-center">
                <td>{dateMask(obj.data)}</td>
                <td>{obj.periodo1In ? obj.periodo1In : (obj.tipo2 === 'FERIADO' ? 'FERIADO' : '-----')}</td>
                <td>{obj.periodo1Out ? obj.periodo1Out : (obj.tipo2 === 'FERIADO' ? '' : '-----')}</td>
                <td>{obj.periodo2In ? obj.periodo2In : (obj.tipo2 === 'FERIADO' ? '' : '-----')}</td>
                <td>{obj.periodo2Out ? obj.periodo2Out : (obj.tipo2 === 'FERIADO' ? '' : '-----')}</td>
                <td>{obj.extrasIn}</td>
                <td>{obj.extrasOut}</td>
                <td>{handleHora(obj)}</td>
                {/* <td>Calcular</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
}
