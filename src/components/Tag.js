import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';


const Tag = () => {

  const [tag, setTag] = useState('');

  const {gif, loader, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-400 mt-7 rounded-xl border border-green-700
                    flex flex-col items-center gap-y-5 mb-5'>

      <h1 className='font-bold text-2xl uppercase mt-2'>RANDOM {tag} GIF</h1>

      {
          loader ? (<Spinner/>) : (<img src={gif} width="300px"></img>)
      }

      <input
        type='text'
        className='w-9/12 rounded-lg p-1 mb-1 text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button onClick={() => fetchData(tag)}
      className='w-9/12 bg-green-200 rounded-lg p-1 font-bold mb-4'
      >GENERATE</button>
    </div>
  )
}

export default Tag