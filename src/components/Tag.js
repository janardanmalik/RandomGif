import React, { useState } from 'react'
import  UseGif  from '../hooks/UseGif';
import Spinner from './Spinner';

export const Tag = () => {
    const[Tag,setTag]=useState("dog");
    const{gif,loading,fetchData}=UseGif(Tag);
  return (
    <div className="w-1/2 h-[450px] bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random {Tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} width="450" />)
      }

      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={Tag} />

      <button
        onClick={() => fetchData(Tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  )
}
