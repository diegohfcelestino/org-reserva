/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Reinf from "../../assets/img/efdReinf.jfif";
import NewModal from "../../components/NewModal";
import { supabase } from "../../supabaseClient";
import "./style.scss";

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lista, setLista] = useState([]);

  async function searchVideo() {
    const { data: videos, error } = await supabase
      .from("videos")
      .select("*")
      .order("id", { ascending: true });

    setLista(videos);
  }

  useEffect(() => {
    searchVideo();
  }, []);


  function handleOpenNewModal() {
    setIsModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container minHeight">
      <div className="row">
        <ul>
          {lista.map(video => {
            return (
              <li key={video.id}>{video.url}</li>
            )
          })}
        </ul>
        {lista.map(video => {
          return (
            <div className="col" key={video.id}>
              <h2>{video.title}</h2>
              <button type="button" onClick={handleOpenNewModal}>
                <img src={video.image} alt="reinf" />
              </button>
              <p>{video.subject}</p>
              <p>{video.url}</p>
              <div className="container"></div>
              <NewModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseNewModal}
                url={video.url}
              />
            </div>
          );
        })}
        {/* <div className="col">
          <h2>Quem envia a EFD-Reinf</h2>
          <button type="button" onClick={handleOpenNewModal}>
            <img src={Reinf} alt="reinf" />
          </button>
          <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
          <div className="container"></div>
          <NewModal isOpen={isModalOpen} onRequestClose={handleCloseNewModal} />
        </div>
        <div className="col">
          <h2>Quem envia a EFD-Reinf</h2>
          <button type="button" onClick={handleOpenNewModal}>
            <img src={Reinf} alt="reinf" />
          </button>
          <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
          <div className="container"></div>
          <NewModal isOpen={isModalOpen} onRequestClose={handleCloseNewModal} />
        </div>
        <div className="col">
          <h2>Quem envia a EFD-Reinf</h2>
          <button type="button" onClick={handleOpenNewModal}>
            <img src={Reinf} alt="reinf" />
          </button>
          <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
          <div className="container"></div>
          <NewModal isOpen={isModalOpen} onRequestClose={handleCloseNewModal} />
        </div>
        <div className="col">
          <h2>Quem envia a EFD-Reinf</h2>
          <button type="button" onClick={handleOpenNewModal}>
            <img src={Reinf} alt="reinf" />
          </button>
          <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
          <div className="container"></div>
          <NewModal isOpen={isModalOpen} onRequestClose={handleCloseNewModal} />
        </div> */}
      </div>
    </div>
  );
};

export default Videos;
