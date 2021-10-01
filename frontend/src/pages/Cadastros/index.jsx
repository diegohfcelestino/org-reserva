import React, { useState } from 'react'
import Admin from '../../assets/icons/administrator-developer.svg'
import ItemsCadastro from '../../components/Cadastros/Items'
import { useAuth } from '../../context/Auth'
import { useItems } from '../../context/cadastros/ItemsContext'


function Cadastros() {
    const { user } = useAuth()
    const { idTipo, setIdTipo } = useItems()
    const [salaClick, setSalaClick] = useState(false)
    const [VeiculoClick, setVeiculoClick] = useState(false)

    const isAdmin = user.user_metadata.isAdmin

    function setSala() {
        setSalaClick(true)
        setVeiculoClick(false)
        setIdTipo(1)
    }
    function setCarro() {
        setSalaClick(false)
        setVeiculoClick(true)
        setIdTipo(2)
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
                    {idTipo !== 0 &&
                        <span>
                            <ItemsCadastro />
                        </span>
                    }
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
                    <h1>Ooops... Você não tem acesso a essa área!</h1>
                    <br />
                    <img
                        style={{ width: '8rem', height: '8rem' }}
                        src={Admin}
                        alt="Administrador"
                    />
                    <h1 className="lead mt-3">Entre em contato com o administrador.</h1>
                </div>
            )
            }
        </div>
    )
}

export default Cadastros;


