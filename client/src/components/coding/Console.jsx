import React from 'react'

export default function Console() {
  return (
    <div className='bg-black text-green-600 text-mon font-mono z-10'>
        <div className='w-full h-8 border-b border-green-600 flex justify-center items-center'>
            <p>TATA-TEC 2.0</p>
        </div>
        <div className='w-full'>
            <textarea className='p-2 text-2xl w-full resize-none bg-black max-w-none' 
            name="tatotext" id="tatotext" cols="30" rows="10"></textarea>
        </div>
        <div className='bg-black w-full h-10 border-t border-green-600 z-10'>
            <div className='flex justify-end'>
                <button className='bg-green-600 text-white p-2 pl-10 pr-10 active:bg-green-300'>Run</button>
            </div>
        </div>
    </div>
  )
}
