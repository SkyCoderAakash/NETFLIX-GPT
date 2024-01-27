import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movies);
  return movies && (
    <div className='bg-black'>
      <div className=' relative z-20 md:-mt-[5%] lg:-mt-[18%]'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer
