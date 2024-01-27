import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import GptSearch from './GptSearch';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGpt = useSelector(store => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGpt===true ? <GptSearch /> : <>
      <MainContainer />
      <SecondaryContainer /> 
      </> }

    </div>
  )
}

export default Browse
