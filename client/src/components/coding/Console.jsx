import React from 'react'

export default function Console() {
  return (
    <div className='bg-black h-full text-green-600 text-mon font-mono'>
        <div className='w-full h-8 border-b border-green-600 flex justify-center items-center'>
            <p>TATA-TEC 2.0</p>
        </div>
        <div className='w-full h-full'>
            <textarea className='p-2 text-2xl w-full h-full resize-none bg-black max-w-none' 
            name="tatotext" id="tatotext" cols="30" rows="10"></textarea>
        </div>
    </div>
  )
}
