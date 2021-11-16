/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useStorage } from "./StorageContext";

export const CursosContext = createContext();

export function CursoProvider({ children }) {
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState({})
  const [videoAmount, setVideoAmount] = useState()

  const { getUrl, imgUrl } = useStorage()

  async function buscaCursos() {
    let { data: cursos, error } = await supabase
      .from("cursos")
      .select("*")
      .order("id", { ascending: true });

    console.log(cursos)

    setCursos(cursos);
  }

  async function getCursoById(id, url = false) {
    let { data: curso, error } = await supabase
      .from("cursos")
      .select("*")
      .match({ id: id })
    setSelectedCurso(curso)
    if (url) {
      if (curso[0].img_name) {
        getUrl(curso[0].img_name)
      } else {
        getUrl('sem-foto.jpg')
      }
    }
  }

  async function insertCurso(curso) {
    const { data, error } = await supabase
      .from("cursos")
      .insert([curso]);

    if (error) {
      return alert(error);
    } else {
      buscaCursos();
      return data
    }
  }

  async function deleteCurso(id) {
    const { data, error } = await supabase
      .from("cursos")
      .delete()
      .match({ id: id });

    if (error) {
      return alert(error);
    } else {
      buscaCursos();
      return data
    }
  }

  async function updateCurso(curso) {
    const { data, error } = await supabase
      .from("cursos")
      .update(curso)
      .match({ id: curso.id });


    const { video } = await supabase
      .from('videos')
      .update({ image: `${imgUrl}${curso.img_name}` })
      .match({ tipo: curso.id })

    if (error) {
      return alert("Erro ao atualizar curso.");
    } else {
      buscaCursos();
      return data;
    }
  }

  useEffect(() => {
    buscaCursos();
  }, []);

  return (
    <CursosContext.Provider
      value={{
        cursos,
        selectedCurso,
        setSelectedCurso,
        buscaCursos,
        getCursoById,
        insertCurso,
        deleteCurso,
        updateCurso,
        videoAmount,
        setVideoAmount
      }}
    >
      {children}
    </CursosContext.Provider>
  );
}

export function useCursos() {
  return useContext(CursosContext);
}
