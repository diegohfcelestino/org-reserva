import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useVideos } from "../../../context/cadastros/VideosContext";
import "./video_style.scss";



export default function VideosManager() {
  const { videos, semFoto } = useVideos()
  const [edit, setEdit] = useState(false)

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
              <th>tipo</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {videos.length === 0 ? (
              <tr>
                <td>Nada a exibir</td>
              </tr>
            ) : (
              videos.map(video => {
                return (
                  <tr key={video.id}>
                    <td>{video.id}</td>
                    <td className="img">{video.image ?
                      <img src={video.image} alt={video.image} />
                      :
                      <img src={semFoto} alt="Sem foto" />
                    }</td>
                    <td>{!edit ? video.title : <input type="text" value={video.title} />}</td>
                    <td>{video.subject}</td>
                    <td>{video.url}</td>
                    <td>{video.cursos.curso_name}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-dark"
                        style={{ marginRight: "1rem" }}
                        onClick={() => setEdit(!edit)}
                      >
                        <FaRegEdit />
                      </button>
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