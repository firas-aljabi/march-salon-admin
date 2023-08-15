import React, { useState } from 'react'
import Calendar from '../Components/Calander'
import DropDown from '../Components/DropDown'
import row from '../Images/chevron-down (11).png'


const Filter = ({onClose,visible}) => {
    const arr=[
{name : "سيرين", id:"1" },
{name : "سارة ", id:"2" },
{name : "سميرة", id:"3" },
{name : "سعاد", id:"4" },
]

    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)

    if(!visible) return null

  return (
    <div  className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
      <div  className='lg:w-[60%] md:w-[65%] sm:w-[50%] w-[70%] md:h-[70%] h-[80%] bg-white flex justify-center items-center'>
        <div className=''>
         <div className='flex justify-between mb-4'>
             <img  onClick={onClose} className='md:w-[4%] w-[10%] mb-7' src={row} />
                <h1 className='text-xl' >فلترة التحويلات</h1>
        </div>
        <div className='flex justify-center'>
          <div>
        <div className='grid md:grid-cols-2 gap-3'>
            <div className='' onClick={()=>{setOpen1(!open1)}}>
            <Calendar name={'التاريخ الى'} visible={open1}/>
            </div>
            <div className='' onClick={()=>{setOpen2(!open2)}}>
            <Calendar name={'التاريخ من'} visible={open2}/>
            </div>
        </div>
        
        
        <div className='grid md:grid-cols-2 gap-3 '>
            <DropDown paasedarr={arr}/>
            <DropDown paasedarr={arr}/>
        </div>
        <div className='lg:flex justify-end'>
            <DropDown paasedarr={arr}/>
        </div>
       
         <div className=' mt-5'>
                     <button className='bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67]  p-3 md:w-48 text-white shadow-inner shadow-[#D9D9D9]'>
                        <div className='flex justify-evenly'>
                         <h1 className='text-center'>إعادة تعيين</h1> 
                     {/* <img className='w-5 h-5' src={vector} /> */}
                    
                     </div>
                     </button>
                       <button className='bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67]  p-3 md:w-36 text-white ml-[4%] shadow-inner shadow-[#D9D9D9]'>
                        <div className='flex justify-evenly'>
                         <h1 className='text-center'> فلترة</h1> 
                     {/* <img className='w-5 h-5' src={vector} /> */}
                    
                     </div>
                       </button>
                </div>
      </div>
       </div>
       </div>
        </div>
    </div>
  )
}

export default Filter