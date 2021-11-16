/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useCursos } from "./CursosContext";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState(false)

  const semFoto = "https://axffhxihcghesdxcvtaj.supabase.in/storage/v1/object/public/cursos/sem-foto.jpg"

  async function getVideos() {
    const { data: videos, error } = await supabase
      .from("videos")
      .select(`
      *,
      cursos(curso_name)
    `)
      .order("id", { ascending: true })
    setVideos(videos)
  }

  async function insertVideo(video) {
    let { data, error } = await supabase
      .from('videos')
      .insert([video])
    getVideos()
    console.log(video)
    if (error) alert(error.message)
    return data
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <VideoContext.Provider value={{
      videos,
      insertVideo,
      semFoto
    }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideos() {
  return useContext(VideoContext)
}
