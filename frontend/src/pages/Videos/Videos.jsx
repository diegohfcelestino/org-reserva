import { useState } from 'react';
import Modal from 'react-modal';
import Reinf from '../../assets/img/efdReinf.jfif'
import "./style.scss";

Modal.setAppElement('#root');

const Videos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenNewModal() {
        setIsModalOpen(true);
    }

    function handleCloseNewModal() {
        setIsModalOpen(false);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Quem envia a EFD-Reinf</h2>
                    <img src={Reinf} alt="reinf"/>
                    <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
                    <div className="container">
                    <button type="button" onClick={handleOpenNewModal}>Assistir o vídeo</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} overlayClassName="react-modal-overlay">
                    <div className="container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MJuzskXrehM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button  type="button" onClick={handleCloseNewModal}>Fechar [x]</button>
                </Modal>
                <div className="col">
                    <h2>Quem envia a EFD-Reinf</h2>
                    <img src={Reinf} alt="reinf"/>
                    <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
                    <div className="container">
                    <button type="button" onClick={handleOpenNewModal}>Assistir o vídeo</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} overlayClassName="react-modal-overlay">
                    <div className="container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MJuzskXrehM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button  type="button" onClick={handleCloseNewModal}>Fechar [x]</button>
                </Modal>
                <div className="col">
                    <h2>Quem envia a EFD-Reinf</h2>
                    <img src={Reinf} alt="reinf"/>
                    <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
                    <div className="container">
                    <button type="button" onClick={handleOpenNewModal}>Assistir o vídeo</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} overlayClassName="react-modal-overlay">
                    <div className="container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MJuzskXrehM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button  type="button" onClick={handleCloseNewModal}>Fechar [x]</button>
                </Modal>
                <div className="col">
                    <h2>Quem envia a EFD-Reinf</h2>
                    <img src={Reinf} alt="reinf"/>
                    <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
                    <div className="container">
                    <button type="button" onClick={handleOpenNewModal}>Assistir o vídeo</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} overlayClassName="react-modal-overlay">
                    <div className="container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MJuzskXrehM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button  type="submit" onClick={handleCloseNewModal}>Fechar [x]</button>
                </Modal>
                <div className="col">
                    <h2>Quem envia a EFD-Reinf</h2>
                    <img src={Reinf} alt="reinf"/>
                    <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
                    <div className="container">
                    <button type="button" onClick={handleOpenNewModal}>Assistir o vídeo</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} overlayClassName="react-modal-overlay">
                    <div className="container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MJuzskXrehM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button  type="button" onClick={handleCloseNewModal}>Fechar [x]</button>
                </Modal>
                <div className="col">
                    <h2>Quem envia a EFD-Reinf</h2>
                    <img src={Reinf} alt="reinf"/>
                    <p>Assuntos relacionados a quem não deve enviar o EFD-Reinf</p>
                    <div className="container">
                    <button type="button" onClick={handleOpenNewModal}>Assistir o vídeo</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} overlayClassName="react-modal-overlay">
                    <div className="container">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MJuzskXrehM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <button  type="button" onClick={handleCloseNewModal} >Fechar [x]</button>
                </Modal>
               
            </div>
        </div>

    )
}

export default Videos;
