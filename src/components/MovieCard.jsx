import React from 'react'
import { IMG_CDN_URL } from '../utils/images'
const MovieCard = ({data}) => {

  return data && (
    <div className='flex mt-3'>
      {
        data?.map((movie)=>{
          return movie && (
            <div className='w-40 sm:w-56 md:w-64  mx-1.5' key={movie.id}>
              <a href={'/movie/'+movie.id} >
                <img className='w-full rounded-md' src={IMG_CDN_URL+movie?.backdrop_path} alt="moiveCard" />
              </a>
              <div className='mt-2 text-white text-center'>
                  <h1 className='text-xl py-2'>{movie.title || movie.original_title}</h1>
                  <h1 className='py-1'>IMDB Rating : {movie.vote_average/2}</h1>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default MovieCard
