import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useItems } from "../../../context/cadastros/ItemsContext";
import { useSalaContext } from "../../../context/cadastros/SalasContext";

import "../cadastro.style.scss";

const SalasCadastro = () => {
  const { salas, insertSala, deleteSala, updateSala } = useSalaContext()
  const [nameRoom, setNameRoom] = useState("");
  const [room, setRoom] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)

  // const { insertItems } = useItems()

  function handleUpdate(room) {
    setIsUpdating(true)
    setNameRoom(room.name_sala)
    setRoom(room)
    console.log(room)
  }

  function save() {
    if (!nameRoom) {
      return alert(`Preencha a sala!`);
    } else {
      insertSala(nameRoom)
      setNameRoom("");
    }

  }

  function update() {
    const sala = { ...room }
    sala.name_sala = nameRoom
    updateSala(sala)
    setNameRoom("")
    setIsUpdating(false)
  }


  function remove(id) {
    if (!id) {
      return alert(`Selecione uma sala!`);
    } else {
      deleteSala(id)
      alert('Room deleted!')
    }
  }

  return (
    <div className="container-fluid alto">
      <div className="box">
        <div className="mb-3">
          <h2>Cadastro de Salas</h2>
        </div>
        <div className="col-12">
          <form>
            <div className="mb-3 row">
              <label htmlFor="sala" className="form-label col-1 py-2 p-3">
                Descrição
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  id="car"
                  name="car"
                  value={nameRoom}
                  onChange={e => setNameRoom(e.target.value)}
                />
              </div>
              <div className="col-1">
                {!isUpdating ? (
                  <button
                    type="button"
                    onClick={() => save()}
                    className="btn btn-primary"
                  >
                    Salvar{/* {!isUpdating ? 'Salvar' : 'Atualizar'} */}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => update()}
                    className="btn btn-primary"
                  >
                    Atualizar{/* {!isUpdating ? 'Salvar' : 'Atualizar'} */}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
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
            {salas.map(room => {
              return (
                <tr key={room.id}>
                  <td>{room.id}</td>
                  <td>{room.name_sala}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-dark"
                      style={{ marginRight: "1rem" }}
                      onClick={() => handleUpdate(room)}
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-dark"
                      onClick={() => remove(room.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalasCadastro;
