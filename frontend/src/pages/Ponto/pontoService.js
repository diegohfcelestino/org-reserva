import qs from "qs";
import { useAuth } from "../../context/Auth";
import api from "../../services/api";
import { handleError, handleParams } from "../../services/helper";

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

export function handleLoad(loadOptions) {
  const auth = JSON.parse(sessionStorage.getItem(useAuth));
  const params = {
    cpf: auth.cpf,
  };
  const newParams = handleParams(params, loadOptions);
  const url = `PoCartao/GetPorCpf?${qs.stringify(newParams)}`;

  return api
    .get(url)
    .then((res) => {
      const { data, totalCount } = res.data;
      console.log("data", data, totalCount);
      return {
        data,
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
