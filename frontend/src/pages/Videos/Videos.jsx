import { useState } from "react";
import Reinf from "../../assets/img/efdReinf.jfif";
import NewModal from "../../components/NewModal";
import "./style.scss";

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [lista, setLista] = useState([
    {
      titulo: "Quem envia a EFD-Reinf",
      imagem: Reinf,
      assunto: "Assuntos relacionados a quem não deve enviar o EFD-Reinf",
      url: "https://www.youtube.com/embed/MJuzskXrehM",
    },
    {
      titulo: "Quem envia a EFD-Reinf",
      imagem: "efdReinf.jfif",
      assunto: "Assuntos relacionados a quem não deve enviar o EFD-Reinf",
      url: "https://www.youtube.com/embed/MJuzskXrehM",
    },
    {
      titulo: "Quem envia a EFD-Reinf",
      imagem: "efdReinf.jfif",
      assunto: "Assuntos relacionados a quem não deve enviar o EFD-Reinf",
      url: "https://www.youtube.com/embed/MJuzskXrehM",
    },
    {
      titulo: "Quem envia a EFD-Reinf",
      imagem: "efdReinf.jfif",
      assunto: "Assuntos relacionados a quem não deve enviar o EFD-Reinf",
      url: "https://www.youtube.com/embed/MJuzskXrehM",
    },
    {
      titulo: "Quem envia a EFD-Reinf",
      imagem: "efdReinf.jfif",
      assunto: "Assuntos relacionados a quem não deve enviar o EFD-Reinf",
      url: "https://www.youtube.com/embed/MJuzskXrehM",
    },
  ]);

  function handleOpenNewModal() {
    setIsModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container">
      <div className="row">
        {lista.map((item, index) => {
          return (
            <div className="col" id={index}>
              <h2>{item.titulo}</h2>
              <button type="button" onClick={handleOpenNewModal}>
                <img src={item.imagem} alt="reinf" />
              </button>
              <p>{item.assunto}</p>
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
