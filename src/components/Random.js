import React, { useEffect, useState } from 'react'
import  UseGif from '../hooks/UseGif';
import Spinner from './Spinner';

export const Random = () => {
//   const[gif,setgif]=useState("");
//   async function fetch(){
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const {data}= await axios.get(url);
//     const response=data.data.images.downsized.url;
//     setgif(response);
//     }
//  useEffect(()=>{
// fetch();
//  },[])
//  function handleChange(e){
// fetch();
const{gif,loading,fetchData}=UseGif();
    
 return (
    <div className='w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-3xl uppercase underline font-bold'> Random</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" />}
        <button
        onClick={()=>fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
        >Generate</button>
    </div>
  )

}
