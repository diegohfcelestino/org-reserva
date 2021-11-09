/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NewModal from "../../components/NewModal";
import { supabase } from "../../supabaseClient";

import Erro from "../../assets/img/icons8-erro.gif"

import "./style.scss";

const Videos = ({ tipo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lista, setLista] = useState([]);
  const [url, setUrl] = useState(null);



  useEffect(() => {
    async function searchVideo() {
      const { data: videos, error } = await supabase
        .from("videos")
        .select("*")
        .filter("tipo", "eq", tipo)
        .order("id", { ascending: true });

      setLista(videos);
    }
    searchVideo();
  }, [tipo]);

  function handleOpenNewModal() {
    setIsModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container minHeight">
      <div className="row">
        {!lista.length ?
          (
            <div className="text-center">
              <img src={Erro} alt="Erro" style={{ width: "8rem" }} />
              <h1 className="text-center">Ainda não temos vídeos...</h1>
            </div>
          )
          :
          lista.map((video) => {
            return (
              <div className="col" key={video.id}>
                <h2>{video.title}</h2>
                <button
                  type="button"
                  onClick={() => {
                    handleOpenNewModal();
                    setUrl(video.url);
                  }}
                >
                  <img src={video.image} alt="reinf" />
                </button>
                <p>{video.subject}</p>
              </div>
            );
          })}
        <div className="container"></div>
        <NewModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseNewModal}
          url={url}
        />
      </div>
    </div>
  );
};

export default Videos;
