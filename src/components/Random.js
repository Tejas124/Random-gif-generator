import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY =  process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

  const {gif, loader, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 mt-7 rounded-xl border border-green-700
                    flex flex-col items-center gap-y-5'>

      <h1 className='font-bold text-2xl underline mt-2'> A RANDOM GIF</h1>

      {
          loader ? (<Spinner/>) : (<img src={gif} width="300px"></img>)
      }

      

      <button onClick={() => fetchData()}
      className='w-9/12 bg-green-200 rounded-lg p-1 font-bold mb-4'
      >GENERATE</button>
    </div>
  )
}

export default Random