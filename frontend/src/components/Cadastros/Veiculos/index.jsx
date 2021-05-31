import React, { useState } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'

import '../cadastro.style.css'

const VeiculosCadastro = () => {
	const [cars, setCars] = useState([])
	const [car, setCar] = useState('')

	function save() {
		if (!car) {
			return alert(`Preencha o carro!`)
		}
		var temp = cars
		temp.push(car)
		setCars(temp)
		setCar('')
	}

	function remove(index, s) {
		var temp = cars
		temp.splice(index, 1)
		setCars(temp)
		alert(`Carro ${s} foi deletado!`)
		setCar('')
		return s;
	}

	return (
		<div className="container-fluid alto">
			<div className="box">
				<div className="mb-3">
					<h2>Cadastro de Carros</h2>
				</div>
				<div className="col-12">
					<form>
						<div className="mb-3 row">
							<label htmlFor="sala" className="form-label col-1 py-2 p-3">Descrição</label>
							<div className="col-10">
								<input
									type="text"
									className="form-control"
									id="car"
									name="car"
									value={car}
									onChange={e => setCar(e.target.value)}
								/>
							</div>
							<div className="col-1">
								<button type="button" onClick={() => save()} className="btn btn-primary">Salvar</button>
							</div>
						</div>
					</form>
				</div>
			</div >
			<hr />
			<div className=" container-fluid table-responsive rolagem">
				<table className="table table-striped table-sm">
					<thead /* className="bg-dark text-light" */>
						<tr>
							<th className="text-center">#</th>
							<th>Descrição</th>
							<th className="text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{cars.map((room, i) => {
							return (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{room}</td>
									<td>
										<button
											className="btn btn-sm btn-outline-dark"
											style={{ marginRight: "1rem" }}
											onClick={() => setCar(room)}
										>
											<FaRegEdit /></button>
										<button
											className="btn btn-sm btn-outline-dark"
											onClick={() => remove(i, car)}
										>
											<FaRegTrashAlt /></button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default VeiculosCadastro;