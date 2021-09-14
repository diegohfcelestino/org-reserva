/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NewModal from "../../components/NewModal";
import { supabase } from "../../supabaseClient";
import "./style.scss";

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function searchVideo() {
    let { data: videos } = await supabase
      .from("videos")
      .select("*")
      .order("id", { ascending: true });

    console.log(videos);
    setLista(videos);
  }

  useEffect(() => {
    searchVideo();
  }, []);

  const [lista, setLista] = useState([]);

  function handleOpenNewModal() {
    setIsModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container minHeight">
      <div className="row">
        {lista.map((item) => {
          return (
            <div className="col" key={item.id} /* id={item.id} */>
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
      </div>
    </div>
  );
};

export default Videos;
