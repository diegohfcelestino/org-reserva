import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export default function Agendamento() {
    const datePt = format(new Date(), 'dd/MM/yyyy', { locale: ptBr })
    const date1 = format(new Date(), 'yyyy-MM-dd')
    return (
        <div className="container-fluid">
            <h2>Agendamento</h2>
            <div className="container-fluid mb-3">
                <p>Data: {datePt}</p>
                <form >
                    <div className="col-12 row">
                        <div className="col-auto">
                            <label htmlFor="data_agendamento" className="form-label">Data Inserção</label>
                            <input type="date" name="data_agendamento" className="form-control" value={date1} disabled />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="data_inicio" className="form-label">Data Inicio</label>
                            <input type="date" name="data_inicio" className="form-control" />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="data_fim" className="form-label">Data Fim</label>
                            <input type="date" name="data_fim" className="form-control" />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="carro" className="form-label">Carro</label>
                            <select name="carro" className="form-select">
                                <option>Selecione</option>
                                <option>Ford Fiesta - FXN</option>
                                <option>Ford Fiesta - FYT</option>
                                <option>Ford Ka</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}