import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCursos } from "../../../context/cadastros/CursosContext";
import { useStorage } from "../../../context/cadastros/StorageContext";
import { useVideos } from "../../../context/cadastros/VideosContext";

import "./video_style.scss";

export default function VideosCadastro() {
  const { urlImg } = useStorage()
  const { insertVideo } = useVideos()
  const { cursos, getCursoById, selectedCurso, setSelectedCurso } = useCursos()
  const [cursoId, setCursoId] = useState()
  const [iframe, setIframe] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [video, setVideo] = useState({
    title: '',
    image: '',
    subject: '',
    url: '',
    tipo: ''
  })

  function extractUrl(iframe) {
    const urlV = iframe.split("\"")
    // const url1 = url[1].split("\"")
    setVideoUrl(urlV[5])
  }

  function handleClear(e) {
    e.preventDefault()
    setVideo({
      title: '',
      image: '',
      subject: '',
      url: '',
      tipo: ''
    })
    setIframe('')
    setCursoId('0')
    setSelectedCurso({})
  }

  function insert(e) {
    e.preventDefault()
    const newVideo = { ...video }
    newVideo.image = urlImg
    newVideo.url = videoUrl
    insertVideo(newVideo)
    setVideo({
      title: '',
      image: '',
      subject: '',
      url: '',
      tipo: ''
    })
    setIframe('')
    setCursoId('0')
    setSelectedCurso({})

    console.log(newVideo)
  }

  return (
    <div className="videoContainer">
      <div className="header">
        <h1>Cadastro de Vídeos</h1>
        <Link to="/gerenciar-videos"
          className="btn btn-lg btn-outline-dark">
          Gerenciar Vídeos
        </Link>
      </div>
      <div className="formGrid">
        <form >
          <span className="curso" >
            <label htmlFor="curso" className="form-label" >Curso</label>
            <select
              name="curso"
              value={cursoId}
              id="curso"
              className="form-select"
              onChange={e => {
                if (e.target.value > 0) {
                  getCursoById(e.target.value, true)
                  setVideo({
                    ...video,
                    tipo: parseInt(e.target.value)
                  })
                } else {
                  setSelectedCurso({})
                }
                setCursoId(e.target.value)
                // getUrl(selectedCurso.img_name)
              }}
            >
              <option value="0">Selecione um curso</option>
              {cursos.map(curso => {
                return (
                  <option key={curso.id} value={curso.id} > {curso.curso_name}</option>
                )
              })}
            </select>
          </span>
          <span className="title" >
            <label htmlFor="title" className="form-label" >Título</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={video.title}
              onChange={e => setVideo({
                ...video,
                title: e.target.value
              })}
              placeholder="Informe o título do vídeo"
            />
          </span>
          <span className="subject" >
            <label htmlFor="subject" className="form-label" >Descrição</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-control"
              value={video.subject}
              onChange={e => setVideo({
                ...video,
                subject: e.target.value
              })}
              placeholder="Informe uma breve descrição do video"
            />
          </span>
          <span className="iframe" >
            <label htmlFor="subject" className="form-label" >Descrição</label>
            <textarea
              className="form-control"
              value={iframe}
              onChange={e => {
                setIframe(e.target.value)
                extractUrl(e.target.value)
              }}
              placeholder="Cole aqui o código de incorporação do vídeo" />
          </span>
          <span className="url" >
            <label htmlFor="url" className="form-label" >Descrição</label>
            <input
              type="text"
              name="url"
              id="url"
              className="form-control"
              disabled
              defaultValue={videoUrl}
              placeholder="Url do vídeo"
            />
          </span>
          <span className="img" >
            <p htmlFor="img" className="form-label" >Imagem do Curso</p>
            {selectedCurso.length > 0 && (
              <img name="img" src={urlImg} alt={selectedCurso.img_name} />
            )
            }
          </span>
          <span className="buttons">
            <button
              className="btn btn-outline-success"
              onClick={(e) => insert(e)}
            >
              Salvar
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={e => handleClear(e)}>
              Cancelar</button>
          </span>
        </form>
      </div>
    </div >
  )
}
