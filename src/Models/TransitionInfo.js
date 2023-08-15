import React from 'react'
import TransactionInput from '../Components/TransitionInput'
import row from '../Images/chevron-down (11).png'


const TransitionInfo = ({onClose, onChange, visible, data}) => {

    console.log(data)

    if(!visible) return null

  return (
    <div className='w-screen h-screen fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
    <div  className='lg:w-[35%] md:w-[50%] h-[70%] bg-white p-5 pl-10 pr-10 '>
     <div className='flex justify-center'>
         <img onClick={onClose} className=' w-[8%] h-[8%] mr-20' src={row} /> 
        <h2 className='flex justify-center mb-[5%] lg:text-xl mr-20 '>معلومات التحويلة</h2>
 </div>
         <TransactionInput name={'الاسم'} data={data.client.name} onChange={onChange}/>
         <TransactionInput name={'تاريخ التحويل '} data={data.date} onChange={onChange}/>
         <TransactionInput name={' المبلغ'} data={data.transfer_amount} onChange={onChange}/>
         <TransactionInput name={'ملف الحوالة'} data={'data.attached'} onChange={onChange}/> 
        <div className='flex justify-center bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] mt-10 p-3 border w-[100%] '>
      <button className='text-white'>حفظ </button>
       </div>
</div>
</div>
  )
}

export default TransitionInfo