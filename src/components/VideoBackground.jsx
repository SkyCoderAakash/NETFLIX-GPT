import React from 'react'
import useTrailerVedio from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId,isMuted}) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useTrailerVedio(movieId);
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute="+isMuted+"&controls=0&loop=1&rel=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground;