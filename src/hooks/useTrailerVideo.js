import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVedio = (movieId)=>{
    const dispatch = useDispatch();

    const getTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
        const json = await data.json();
        const filteredTrailer = json.results.filter((res)=> res.type === "Trailer");
        const trailer = filteredTrailer.length ? filteredTrailer[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
      getTrailer();
    },[]);
};

export default useTrailerVedio;