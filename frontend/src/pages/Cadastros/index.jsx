import React, { useState } from 'react'

/* import { Link } from 'react-router-dom' */
import VeiculosCadastro from '../../components/Cadastros/Veiculos'
import SalasCadastro from '../../components/Cadastros/Salas'
import { CarroProvider } from '../../context/cadastros/CarrosContext'
import { SalaProvider } from '../../context/cadastros/SalasContext'

function Cadastros() {
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
            <CarroProvider>
                <span>
                    {page === 'carro' && (
                        <VeiculosCadastro />
                    )}
                </span>
            </CarroProvider>
            <SalaProvider>
                <span>
                    {page === 'sala' && (
                        <SalasCadastro />
                    )}
                </span>
            </SalaProvider>
        </div>
    )
}

export default Cadastros;


