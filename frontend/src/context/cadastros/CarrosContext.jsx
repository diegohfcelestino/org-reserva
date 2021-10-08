/* eslint-disable no-unused-vars */
import { func } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const CarroContext = createContext();

export function CarroProvider({ children }) {
  const [carros, setCarros] = useState([]);

  async function buscaCarros() {
    let { data: carros, error } = await supabase
      .from("carros")
      .select("*")
      .order("id", { ascending: true });

    setCarros(carros);
  }

  async function insertCarro(car) {
    const { data, error } = await supabase
      .from("carros")
      .insert([{ name_carro: car }]);

    if (error) {
      return alert(error);
    } else {
      buscaCarros();
    }
  }

  async function deleteCarro(id) {
    const { data, error } = await supabase
      .from("carros")
      .delete()
      .match({ id: id });

    if (error) {
      return alert(error);
    } else {
      buscaCarros();
    }
  }

  async function updateCarro(carro) {
    const { data, error } = await supabase
      .from("carros")
      .update(carro)
      .match({ id: carro.id });

    if (error) {
      return alert("Error updating car");
    } else {
      buscaCarros();
      return data;
    }
  }

  useEffect(() => {
    buscaCarros();
  }, []);

  return (
    <CarroContext.Provider
      value={{
        carros,
        buscaCarros,
        insertCarro,
        deleteCarro,
        updateCarro,
      }}
    >
      {children}
    </CarroContext.Provider>
  );
}

export function useCarroContext() {
  return useContext(CarroContext);
}
