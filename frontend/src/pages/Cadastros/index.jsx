import React, { useState } from 'react'
/* import { Link } from 'react-router-dom' */
import VeiculosCadastro from '../../components/Cadastros/Veiculos'
import SalasCadastro from '../../components/Cadastros/Salas'

const Cadastros = () => {
    const [page, setPage] = useState('')
    const [salaClick, setSalaClick] = useState(false)
    const [VeiculoClick, setVeiculoClick] = useState(false)

    function setSala() {
        setSalaClick(true)
        setVeiculoClick(false)
        setPage('sala')
    }
    function setCarro() {
        setSalaClick(false)
        setVeiculoClick(true)
        setPage('carro')
    }


    return (
        <div className="cadastroContainer">
            <div className="selection">
                <button className={` ${salaClick && 'active'}`}
                    onClick={() => setSala()}
                >
                    Sala
                </button>
                <button
                    className={`${VeiculoClick && 'active'}`}
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
                    <VeiculosCadastro />
                )}
            </span>
        </div>
    )
}

export default Cadastros;