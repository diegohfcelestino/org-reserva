import { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useCursos } from "../../context/cadastros/CursosContext";
import { useStorage } from "../../context/cadastros/StorageContext";
import "./cadastro.style.scss";


export default function Cursos() {
  const { cursos, insertCurso, deleteCurso, updateCurso } = useCursos();
  const { cursosImg, getUrl, imgUrl, uploadFile, getStorage } = useStorage();
  const [selectedImg, setSelectedImg] = useState();
  const [isUpdating, setIsUpdating] = useState();
  const [onSave, setOnSave] = useState(false);
  const [name, setName] = useState("");
  const [curso, setCurso] = useState({});
  const [file, setFile] = useState({})

  function handleUpdate(item) {
    setIsUpdating(true)
    setName(item.curso_name)
    item.img_name ? setSelectedImg(item.img_name) : setSelectedImg('')
    setCurso(item)
    console.log(selectedImg)
  }

  function handleClear() {
    setName("")
    setIsUpdating(false)
    setSelectedImg('')
  }

  function handleFile(event) {
    const newFile = event.target.files[0]
    setFile(newFile)
    setOnSave(true)
  }

  const onInputClick = (event) => {
    event.target.value = ''
  }


  const saveImage = (event) => {
    uploadFile(file.name, file)
    onInputClick(event)
    setFile({})
    setOnSave(false)
    getStorage()
  }

  function save() {
    if (!name) {
      return alert(`Preencha nome dos curso!`);
    } else {
      const curso = {
        curso_name: name,
        img_name: selectedImg
      }
      insertCurso(curso)
      setName("");
    }
  }

  function update() {
    curso.curso_name = name
    curso.img_name = selectedImg
    updateCurso(curso)
    setName("")
    setIsUpdating(false)
    setSelectedImg('')
  }

  function remove(id) {
    if (!id) {
      return alert(`Selecione um curso!`);
    } else {
      deleteCurso(id)
      alert('Curso excluído!')
    }
  }

  return (
    <>
      <div className="d-flex align-items-center navbar p-3">
        <h1 /* className="text-primary py-3" */
          style={{
            fontSize: '3rem',
            fontFamily: "Ubuntu Condensed, sans-serif",
            fontWeight: '700',
            marginTop: '0.5rem',
            color: '#2b2b69'
          }}
        >Cadastro de Cursos e Treinamentos</h1>
        <span>
          <label
            className="btn btn-dark" style={{ background: '#2b2b69' }}
            htmlFor="file"
          >
            <input
              type="file"
              name="file"
              id="file"
              hidden
              onChange={e => handleFile(e)}
              onClick={e => onInputClick(e)}
            />
            {onSave ? file.name : 'Carregar Nova Imagem'}
          </label>
          {onSave && (
            <button
              className="btn btn-success"
              style={{ marginLeft: '1rem' }}
              onClick={(e) => saveImage(e)}
            >
              Salvar
            </button>
          )}
        </span>
      </div>
      <div className="container-fluid alto">
        <div className="box">
          <div className="col-12">
            <form>
              <div className="mb-3 row ">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="nameCurso"
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Nome do Curso"
                    />
                    <label htmlFor="nameCurso">Nome do curso</label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-floating">
                    <select name="img" value={selectedImg} id="img"
                      className="form-select" onChange={e => {
                        setSelectedImg(e.target.value)
                        if (isUpdating) getUrl(e.target.value)
                      }} >
                      <option value=""></option>
                      {cursosImg.map(img => {
                        return (
                          <option key={img.id} value={img.name}>{img.name}</option>
                        )
                      })}
                    </select>
                    <label htmlFor="img">Selecione a imagem</label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <div
                  className="buttons"
                >
                  {!isUpdating ?
                    <button
                      type="button"
                      onClick={() => save()}
                      className="btn btn-success form-control w-100"
                    >
                      Salvar
                    </button>
                    :
                    <button
                      type="button"
                      onClick={() => update()}
                      className="btn btn-success mr-1 w-100"
                    >
                      Atualizar
                    </button>
                  }
                  <button
                    type="button"
                    onClick={() => handleClear()}
                    className="btn btn-primary w-100"
                  >
                    {!isUpdating ? 'Limpar' : 'Cancelar'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div >
        <hr />
        <div className=" container-fluid table-responsive rolagem">
          <table cellSpacing={0} className="table align-middle table-striped table-sm">
            <thead /* className="bg-dark text-light" */>
              <tr>
                <th></th>
                <th className="text-center">#</th>
                <th>Descrição</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cursos.length === 0 ? (<tr><td>Nada a exibir</td></tr>) :
                (cursos.map(item => {
                  return (
                    <tr key={item.id}>
                      <td className="img ">
                        {item.img_name ?
                          <img src={`${imgUrl}${item.img_name}`} alt={item.img_name} />
                          :
                          ''}
                      </td>
                      <td className="id">{item.id}</td>
                      <td>{item.curso_name}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-dark"
                          style={{ marginRight: "1rem" }}
                          onClick={() => handleUpdate(item)}
                        >
                          <FaRegEdit />
                        </button>
                        <button
                          className="btn btn-sm btn-outline-dark"
                          onClick={() => remove(item.id)}
                        >
                          <FaRegTrashAlt />
                        </button>
                      </td>
                    </tr>
                  );
                }))}
            </tbody>
          </table>
        </div>
      </div >
    </>
  )
}