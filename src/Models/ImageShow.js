import React from 'react'

const ImageShow = ({onClose, visible,passedimage}) => {
    if(!visible) return null
console.log(passedimage)
  return (
    <div  className='fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
      <div  className='lg:w-[40%] md:w-[55%] sm:w-[65%] h-[70%] w-[80%] p-5 pl-10 pr-10 -z-50 flex justify-center items-center '>
      <img src={passedimage} className='h-[100%] '/>
      <div className='relative'>
      <h2 onClick={onClose} className='absolute left-10 -top-80 text-white text-[50px]'>x</h2>
      </div>
      </div>
    </div>
  )
}

export default ImageShow
