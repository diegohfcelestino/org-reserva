/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const ItemContext = createContext();

export function ItemsProvider({ children }) {
  const [items, setItems] = useState([])

  async function getItems(id = null) {
    if (id) {
      const { data: items, error } = await supabase
        .from('items')
        .select("*")
        .match({ id: id })
        .order('id', { ascending: true })

      // console.log(items)
      setItems(items)
    } else {
      const { data: items, error } = await supabase
        .from('items')
        .select("*")
        .order('id', { ascending: true })

      // console.log(items)
      setItems(items)
    }
  }

  /* async function getItemsByTipo(idTipo) {
    const { data: items, error } = await supabase
      .from('items')
      .select("*")
      .match({ id_tipo: idTipo })
      .order('description', { ascending: true })

    // console.log(items)
    // setItems(items)
    return items
  } */

  async function insertItem(item) {
    const { data, error } = await supabase
      .from('items')
      .insert(item)

    if (error) {
      return alert(error)
    } else {
      getItems()
    }
  }

  async function deleteItem(id) {
    const { data, error } = await supabase
      .from('items')
      .delete()
      .match({ id: id })

    if (error) {
      return alert(error)
    } else {
      getItems()
    }
  }

  async function updateItem(item) {
    const { data, error } = await supabase
      .from('item')
      .update(item)
      .match({ id: item.id })

    if (error) {
      console.log(data)
      return alert('Error updating item')
    } else {
      getItems()
      return data
    }
  }

  useEffect(() => {
    getItems()
  }, [items])

  useEffect(() => {
    getItems()
  }, [])

  return (
    <ItemContext.Provider value={{
      items,
      insertItem,
      deleteItem,
      updateItem,
      getItems
    }}>
      {children}
    </ItemContext.Provider>
  )
}

export function useItems() {
  return useContext(ItemContext)
}