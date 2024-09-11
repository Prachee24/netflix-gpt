

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"; 
const NowPlayingMovies =()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
      getNowPlayingMovies()
    },[])
  
    const getNowPlayingMovies = async() =>{
      const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
  
      const json =await data.json()
  
      dispatch(addNowPlayingMovies(json))
      
  
    }

};

export default NowPlayingMovies;