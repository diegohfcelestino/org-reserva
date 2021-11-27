import React, { useState } from "react";
import { FaEdit, FaSave, FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCursos } from "../../../context/cadastros/CursosContext";
import { useVideos } from "../../../context/cadastros/VideosContext";
import "./video_style.scss";



export default function VideosManager() {
  const { videos, semFoto, updateVideo } = useVideos()
  const { cursos } = useCursos()
  const [edit, setEdit] = useState({ edit: false, id: 0 })
  const [videoEdit, setVideoEdit] = useState({})

  function handleUpdate() {
    console.log('videoEdit', videoEdit)
    const video = {
      id: videoEdit.id,
      image: videoEdit.image,
      subject: videoEdit.subject,
      tipo: videoEdit.tipo,
      title: videoEdit.title,
      url: videoEdit.url,
    }
    updateVideo(video)
    setEdit({ edit: false, id: 0 })
  }

  function handleChange(e) {
    const video = { ...videoEdit }
    video[e.target.name] = e.target.value
    console.log('video', video)
    setVideoEdit(video)
  }

  return (
    <div className="videoContainer" >
      <div className="header">
        <h1>Gerenciamento de Vídeos</h1>
        <Link to="/cadastros-videos"
          className="btn btn-lg btn-outline-dark">
          Novo Vídeo
        </Link>
      </div>
      <div className="container-fluid table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagem</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Url</th>
              <th>Curso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {!videos/* .length === 0 */ ? (
              <tr>
                <td>Nada a exibir</td>
              </tr>
            ) : (
              videos.map(video => {
                return (
                  <tr key={video.id}  >
                    <td>{video.id}</td>
                    <td className="img">
                      {video.image ?
                        <img src={video.image} alt={video.image} />
                        :
                        <img src={semFoto} alt="Sem foto" />
                      }</td>
                    <td>{
                      !edit ?
                        video.title
                        :
                        (
                          edit.id === video.id ?
                            <input type="text" name="title" value={videoEdit.title}
                              onChange={e => handleChange(e)}
                            />
                            :
                            video.title
                        )
                    }</td>
                    <td>{
                      !edit ?
                        video.subject
                        :
                        (
                          edit.id === video.id ?
                            <input type="text" name="subject" value={videoEdit.subject}
                              onChange={e => handleChange(e)}
                            />
                            :
                            video.subject
                        )
                    }</td>
                    <td>{
                      !edit ?
                        video.url
                        :
                        (
                          edit.id === video.id ?
                            <input type="text" name="url" value={videoEdit.url}
                              onChange={e => handleChange(e)}
                            />
                            :
                            video.url
                        )
                    }</td>
                    <td>{
                      !edit ?
                        video.cursos.curso_name
                        :
                        (
                          edit.id === video.id ?
                            <>
                              {/* <input type="text" name="tipo" value={videoEdit.tipo}
                                onChange={e => handleChange(e)}
                              /> */}
                              <select
                                name="tipo"
                                value={videoEdit.tipo}
                                id="curso"
                                className="form-select"
                                onChange={e => handleChange(e)}

                              >
                                {cursos.map(curso => {
                                  return (
                                    <option key={curso.id} value={curso.id}
                                      selected={videoEdit.tipo}
                                    >
                                      {curso.curso_name}
                                    </option>
                                  )
                                })}
                              </select>
                            </>
                            :
                            video.cursos.curso_name
                        )
                    }</td>
                    <td>
                      {!edit.edit ?
                        <button
                          className="btn btn-outline-secondary"
                          style={{ marginRight: "1rem" }}
                          onClick={() => setEdit({ edit: true, id: video.id })}
                        >

                          <FaEdit />
                        </button>
                        :
                        (edit.id === video.id ?
                          <span className="edit-button">
                            <button
                              className="btn btn-success"
                              onClick={() => handleUpdate()}
                            >
                              <FaSave />
                            </button>
                            <button
                              className="btn btn-secondary"
                              onClick={() => {
                                setEdit({ edit: false })
                                setVideoEdit({})
                              }}
                            >
                              <FaUndo />
                            </button>
                          </span>
                          :
                          <button
                            className="btn btn btn-outline-secondary"
                            style={{ marginRight: "1rem" }}
                            onClick={() => {
                              setEdit({ edit: true, id: video.id })
                              setVideoEdit(video)
                            }}
                          >
                            <FaEdit />
                          </button>
                        )
                      }
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}