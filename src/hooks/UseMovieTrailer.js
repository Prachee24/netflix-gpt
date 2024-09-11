import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const UseMovieTrailer=(movieid)=>{
   
    const dispatch=useDispatch();
    const getMovieVideo = async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`,API_OPTIONS)
        const json=await data.json();

        const filterdata=json.results.filter((data)=> data.type === 'Trailer')
       const trailer=filterdata.length? filterdata[0]:json.results[0];
     
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        getMovieVideo()
    },[])

   
}

export default UseMovieTrailer;