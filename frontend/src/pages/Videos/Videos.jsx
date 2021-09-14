/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Reinf from "../../assets/img/efdReinf.jfif";
import NewModal from "../../components/NewModal";
import { supabase } from "../../supabaseClient";
import "./style.scss";

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function searchVideo() {
    let { data: videos, error } = await supabase
      .from('videos')
      .select("*")
      .order('id', { ascending: false })

    // console.log(carros)
    setLista(videos)
  }

  useEffect(() => {
    searchVideo()
  }, [])

  const [lista, setLista] = useState([]);

  function handleOpenNewModal() {
    setIsModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container">
      <div className="row">
        {lista.map((item) => {
          return (
            <div className="col" key={item.id}/* id={index} */>
              <h2>{item.title}</h2>
              <button type="button" onClick={handleOpenNewModal}>
                <img src={item.image} alt="reinf" />
              </button>
              <p>{item.subject}</p>
              <div className="container"></div>
              <NewModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseNewModal}
                url={item.url}
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
