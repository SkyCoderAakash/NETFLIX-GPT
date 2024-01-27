import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoDescription from './VideoDescription';

const MainContainer = () => {
  const [sound,setSound] = useState(1);
  const soundHandler = ()=>{
    sound===0?setSound(1):setSound(0);
  };
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if(!movies) return;
  const mainMovie = movies[0];
  const {title,overview,id} = mainMovie;
  return (
    <div className=''>
        <VideoDescription isMuted={sound} toggle={soundHandler} id={id} title={title} overview={overview} />
        <VideoBackground isMuted={sound} movieId={id} />
        {/* <VideoDescription title={title} overview={overview} />
        <VideoBackground movieId={id} /> */}
    </div>
  )
}

export default MainContainer
