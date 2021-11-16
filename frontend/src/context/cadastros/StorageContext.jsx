/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient"

export const StorageContext = createContext();

export function StorageProvider({ children }) {
  const [cursosImg, setCursosImg] = useState([])
  const [img, setImg] = useState('')
  const [urlImg, setUrlImg] = useState('')

  const imgUrl = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/cursos/`

  async function getStorage() {
    const { data: img, error } = await supabase
      .storage
      .from('cursos')
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })
    console.log(img)
    const filteredData = img.filter(d => d.name !== 'sem-foto.jpg')
    setCursosImg(filteredData)
    return filteredData
  }

  /*  async function getDownload(name) {
     const { data, error } = await supabase
       .storage
       .from('cursos')
       .download(name)
     console.log(data)
     return setImg(data)
   } */

  async function uploadFile(name, file) {
    const { data, error } = await supabase
      .storage
      .from('cursos')
      .upload(name, file, {
        cacheControl: '3600',
        upsert: false
      })
    return data
  }
  async function getUrl(name) {
    const { publicURL } = supabase
      .storage
      .from('cursos')
      .getPublicUrl(name)

    return setUrlImg(publicURL)
  }


  useEffect(() => {
    getStorage()
  }, [])

  return (
    <StorageContext.Provider value={{
      cursosImg,
      img,
      setImg,
      uploadFile,
      getUrl,
      urlImg,
      setUrlImg,
      imgUrl,
      getStorage,
    }}>
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage() {
  return useContext(StorageContext)
}