import Tabs from "../../components/Tabs/Tabs";
import Videos from "../Videos/Videos";
import '../../components/Tabs/style.scss';
import { useCursos } from "../../context/cadastros/CursosContext";
import { useEffect, useState } from "react";
import { useNavbarContext } from "../../context/NavBarContext";


const HomeCursos = () => {
  const { cursos } = useCursos()
  const { erro } = useNavbarContext()
  const [list, setList] = useState([])

  useEffect(() => {
    console.log(cursos)
    let tabsContents = []
    cursos.map(c => {
      tabsContents.push({
        label: c.curso_name,
        component:
          erro ?
            <h2 className="text-center">{erro}</h2>
            :
            <Videos tipo={c.id} />
      })
      console.log(tabsContents)
      return setList(tabsContents)
    })
  }, [cursos, erro])
  /* const tabsContents = [
    { label: 'Reinf', component: <Videos tipo="reinf" /> },
    { label: 'Banco de Dados', component: <Videos tipo="banco_dados" /> },
    { label: 'Javascript', component: <Videos tipo="javascript" /> },
  ] */
  // const history = useHistory()

  return (
    <div className="content">
      <div className="tabs">
        <Tabs contents={list} title="Cursos e Treinamentos" />
      </div>
    </div>
  )
}

export default HomeCursos


/* <>
      {!tipo && (
        <div className="home-container">
          <h1>Cursos e Treinamentos</h1>
          <h3>Selecione uma opção:</h3>

          <div className="button">
            <ButtonMenu onClick={() => handleClick('reinf')}>
              <img src={Reinf} alt="Reinf" style={{ width: '8rem' }} />
              <p>Reinf</p>
            </ButtonMenu>
            <ButtonMenu>
              <img src={SQL} alt="Banco de Dados" />
              <p>Banco de Dados</p>
            </ButtonMenu>
            <ButtonMenu>
              <img src={JS} alt="Javascript" />
              <p>Javascript</p>
            </ButtonMenu>
          </div>
        </div>
      )}
      {tipo && (
        <Videos tipo={tipo} />
      )}
    </> */