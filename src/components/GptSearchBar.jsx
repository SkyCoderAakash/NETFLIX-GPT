import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {languageTranslator} from '../utils/languageTranslator.js'
import openai from '../utils/openAi.js';

const GptSearchBar = () => {
  const [text,setText] = useState('');
  const userlanguage = useSelector((store) => store?.config.language);

  const gptQuery = 'Act as a movie Recommendation system and suggest some moviesfor the query'+text+"only give me 5 movies, comma seperated like the example giving ahead. Example Rusults : Gadar 2, Animal, RRR, KGF Chapter-2, Jawan." ; 

  const submitHandle = async (e)=>{
    e.preventDefault();
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    gptResult();
    console.log(gptResult.choices);
  };

  return (
    <div className='mt-32 w-full flex justify-center'>
        <form action="" onSubmit={submitHandle}>
          <input className='h-12 w-[50rem] border-2 border-sky-600 px-4 rounded' type="text" placeholder={languageTranslator[userlanguage].placeholder} onChange={(e)=>{setText(e.target.value)}} />
          <button className='bg-black h-10 text-white px-3 py-1.5 rounded ml-2 font-semibold '>{languageTranslator[userlanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
