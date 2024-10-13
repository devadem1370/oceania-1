import React from 'react'

const BlurCard = ({heading,paragraph}) => {
  return (
    <div className='text-center'>
    <h1 className='text-white text-[32px] font-medium  '>{heading}</h1>
    <p className='text-white text-lg pt-6 pb-7 font-normal'>{paragraph}</p>
    </div>
  )
}

export default BlurCard