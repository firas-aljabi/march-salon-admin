import React from 'react'

const SelectImage = () => {
  return (
    <div>
      <div className='mt-2'> 
    <h1 className='text-xs text-end'><span className='mr-2 text-lg text-[#EC1630]'>*</span>الصورة الشخصية</h1>
    <div className='bg-[#F7F7F8] border border-[#B4B4B4] border-dashed flex justify-center items-center h-28'>
      {/**   <img className='w-5 h-5 ' src={image} /> */}
    </div>
    <h1 className='text-[9px] text-[#828282CC] text-end'>هذا الحقل اختياري<span className='ml-1'>*</span></h1>
</div>
              <div className='flex justify-center bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] mt-2 p-3 border w-[100%]'>
              <button className='text-white'>حفظ </button>
               </div>
    </div>
  )
}

export default SelectImage
