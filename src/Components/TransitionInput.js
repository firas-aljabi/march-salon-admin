import React, { useState } from 'react'

const TransactionInput = ({name,onChange,data}) => {
  return (
    <div>
      <div className=' bg-[#F7F7F8] border mb-3 mt-3 '>
                <h4 className='text-right text-[10px] opacity-50 mr-2'>{name}</h4>
                <input className='bg-transparent outline-none text-right w-[100%]' value={data}
                onChange={onChange}/>
                </div>
    </div>
  )
}

export default TransactionInput
