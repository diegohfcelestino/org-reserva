import React, { useState } from 'react'
/* import { Link } from 'react-router-dom' */
import CarrosCadastro from '../../components/Cadastros/Carros'
import SalasCadastro from '../../components/Cadastros/Salas'

const Cadastros = () => {
    const [page, setPage] = useState('')
    const [salaClick, setSalaClick] = useState(false)
    const [carroClick, setCarroClick] = useState(false)

    function setSala() {
        setSalaClick(true)
        setCarroClick(false)
        setPage('sala')
    }
    function setCarro() {
        setSalaClick(false)
        setCarroClick(true)
        setPage('carro')
    }


    return (
        <div className="cadastroContainer">
            <div>
                <button className={` ${salaClick && 'active'}`}
                    onClick={() => setSala()}
                >
                    Sala
                </button>
                <button
                    className={`${carroClick && 'active'}`}
                    onClick={() => setCarro()}
                >
                    Carro
                </button>
            </div>
            <span>
                {page === 'sala' && (
                    <SalasCadastro />
                )}
                {page === 'carro' && (
                    <CarrosCadastro />
                )}
            </span>
        </div>
    )
}

export default Cadastros;