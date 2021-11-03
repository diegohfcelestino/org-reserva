import qs from "qs";
import { useAuth } from "../../context/Auth";
import api from "../../services/api";
import { handleError } from "../../services/helper";
import { supabase } from "../../supabaseClient";

export function handleLoadById(loadOptions) {
  const auth = JSON.parse(sessionStorage.getItem(useAuth));
  const id = typeof loadOptions === "number" ? loadOptions : null;
  const params = {
    idCliente: id,
    cpf: auth.cpf,
    skip: 0,
    take: 20,
  };

  const urlComplete = `PoCartao/GetPorCpf?${qs.stringify(params)}`;

  return api
    .get(urlComplete)
    .then((res) => {
      const { data, totalCount } = res.data;

      if (id !== null) {
        return data;
      }

      return {
        data,
        totalCount,
      };
    })
    .catch((err) => handleError("Erro ao carregar", err));
}

export function handleInsert(values) {
  const auth = JSON.parse(sessionStorage.getItem(useAuth));
  const record = {
    id: 0,
    ...values,
    usuario: "Ponto",
    cpf: auth.cpf,
    nome: auth.name,
    excluido: false,
  };

  return api
    .post("PoCartao", record)
    .then((res) => res)
    .catch((err) => handleError("Erro ao incluir", err));
}

export function handleLoad(dataInicial, dataFinal) {
  const session = supabase.auth.session();
  const user = session.user;
  const data = user.user_metadata;
  const params = {
    cpf: data.cpf,
    skip: 0,
    take: 10000,
  };
  const url = `${process.env.REACT_APP_API}PoCartao/GetPorCpf?${qs.stringify(
    params
  )}`;

  return api
    .get(url)
    .then((res) => {
      const { data, totalCount } = res.data;
      data.sort((a, b) => {
        if (a.data > b.data) {
          return 1;
        }
        if (a.data < b.data) {
          return -1;
        }
        return 0;
      })
      console.log('data:', data)
      console.log('totalCount:', totalCount)
      const dataFiltered = data.filter(d => d.data >= dataInicial && d.data <= dataFinal)
      return {
        data,
        dataFiltered,
        totalCount,
      };
    })
    .catch((err) => handleError("Erro ao carregar", err));
}

export function handleRemove({ id }) {
  return api
    .delete(`PoCartao/Id/${id}`)
    .then((res) => res)
    .catch((err) => handleError("Erro ao remover", err));
}

export function handleUpdate(key, values) {
  const record = {
    ...key,
    ...values,
    excluido: false,
  };

  return api
    .put("PoCartao", record)
    .then((res) => res)
    .catch((err) => handleError("Erro ao editar", err));
}
