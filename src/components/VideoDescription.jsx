import React from 'react'
import { unMutedIMG,mutedImg } from '../utils/images.js'  

const VideoDescription = ({title,overview,isMuted,toggle,id}) => {
  return (
    <div className='flex justify-between w-screen aspect-video bg-gradient-to-r from-black absolute pt-[35%] text-white sm:pt-[30%] md:pt-[20%]'>
      <div className='w-9/12'>
        <p className='text-[1.80rem] font-bold mx-10 my-2 sm:text-4xl lg:text-5xl sm:mx-12'>{title}</p>
        <p className='text-lg hidden font-medium my-1 mx-6 lg:text-xl md:flex sm:mx-12'>{overview}</p>
        <div className='mx-6 my-2 hidden sm:mx-12 sm:block'>
          <button className='mx-1 my-2 bg-white hover:bg-opacity-85 text-black px-4 py-1 text-2xl font-medium rounded'>
            <a href={'/movie/'+id} >Play</a>
            </button>
          <button className='mx-1 my-2 bg-gray-600 text-white px-4 py-1 text-2xl font-medium rounded'>More Info!</button>
        </div>
      </div>
      <div className="bg-white h-fit p-1 mr-5 mt-[6%] cursor-pointer rounded-md sm:mr-8 lg:mr-10">
        <img className="w-6" onClick={toggle} src={isMuted===0?unMutedIMG:mutedImg} alt="" />
      </div>
    </div>
  )
}

export default VideoDescription
