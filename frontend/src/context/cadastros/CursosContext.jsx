/* eslint-disable no-unused-vars */
import { func } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const CursosContext = createContext();

export function CursoProvider({ children }) {
  const [cursos, setCursos] = useState([]);

  async function buscaCursos() {
    let { data: cursos, error } = await supabase
      .from("tipos_cursos")
      .select("*")
      .order("id", { ascending: true });

    console.log(cursos)

    setCursos(cursos);
  }

  async function insertCurso(curso) {
    const { data, error } = await supabase
      .from("tipos_cursos")
      .insert([{ curso_name: curso }]);

    if (error) {
      return alert(error);
    } else {
      buscaCursos();
    }
  }

  async function deleteCurso(id) {
    const { data, error } = await supabase
      .from("tipos_cursos")
      .delete()
      .match({ id: id });

    if (error) {
      return alert(error);
    } else {
      buscaCursos();
    }
  }

  async function updateCurso(curso) {
    const { data, error } = await supabase
      .from("tipos_cursos")
      .update(curso)
      .match({ id: curso.id });

    if (error) {
      return alert("Error updating car");
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
        buscaCursos,
        insertCurso,
        deleteCurso,
        updateCurso,
      }}
    >
      {children}
    </CursosContext.Provider>
  );
}

export function useCursos() {
  return useContext(CursosContext);
}
