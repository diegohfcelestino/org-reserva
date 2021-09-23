import React, { useState } from 'react'
import { useAuth } from '../../context/Auth'

import { CarroProvider } from '../../context/cadastros/CarrosContext'
import { SalaProvider } from '../../context/cadastros/SalasContext'
/* import { Link } from 'react-router-dom' */
import VeiculosCadastro from '../../components/Cadastros/Veiculos'
import SalasCadastro from '../../components/Cadastros/Salas'
import Admin from '../../assets/icons/administrator-developer.svg'

function Cadastros() {
    const { isAdmin } = useAuth()
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
            {isAdmin ? (
                <>
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
                </>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10rem',
                    }}
                >
                    <img
                        style={{ width: '8rem', height: '8rem' }}
                        src={Admin}
                        alt="Administrador"
                    />
                    <h1 className="lead mt-3">Entre em contato com o administrador do sistema.</h1>
                </div>
            )
            }
        </div>
    )
}

export default Cadastros;


