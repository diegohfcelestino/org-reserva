/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
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
      </div>
    </div>
  );
};

export default Videos;
