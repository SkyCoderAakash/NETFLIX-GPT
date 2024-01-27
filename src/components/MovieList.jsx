import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if(movies===null) return;
    return title && movies && (
        <div className="pt-8 mx-5">
            <h1 className='font-medium text-3xl text-white'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar mt-2 '>
                <div className='flex'>
                    <MovieCard data={movies} />
                </div>
            </div>    
        </div>
        
    )
}

export default MovieList
