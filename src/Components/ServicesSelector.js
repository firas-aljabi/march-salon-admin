import React, { useState } from 'react'
import tru from '../Images/image.png'
import chevrondown from '../Images/chevron-down (10).png'

 const arr=[
{name : "سيرين", id:"1" },
{name : "سارة ", id:"2" },
{name : "سميرة", id:"3" },
{name : "سعاد", id:"4" },
]

const ServicesSelector = ({paasedarr}) => {
    const [start,setStart]=useState(false)
  const [selected,setSelected]=useState('الموظفة المسؤولة ')
console.log(selected)

  function asdd(){
    setStart(!start)
 }
  return (
    <div className='W-screen '>
        <div className=''>
      <button className=" border border-[#E3AB67] bg-[#E3AB67] bg-opacity-[13%] w-[100%] " type="button"
onClick={asdd}
>
    <h2 className='text-xs text-[#B5B5B5] flex justify-end mr-1'>الخدمات</h2>
      <div className='flex relative h-6'>
         <img src={chevrondown} className={`w-5 h-5  ${start?'rotate-180':''} `}/> 
          <h2 className='text-xs absolute right-0'> {selected}
  </h2>
      </div>
</button>
   </div>
   {start?
<div id="dropdownHover" className="z-50  bg-white divide-y divide-gray-100 rounded-lg shadow w-32  absolute">
    <ul class="py-2 text-sm ">
    
       {
        arr.map((item) => {
            return(
                <div key={item.id}  className='bg-white flex justify-between p-1 items-center rounded-lg text-xs'>
                    <li className=' flex justify-between items-center 'onClick={()=>{setSelected(item.name);setStart(!start)}}>
   
        <div  className="block px-2 py-1 hover:bg-gray-100  " >
            
             {item.name}</div>
              <div className={`w-3 h-3 border  ${selected==`${item.name}`?'border-[#D4821F]':'border-'}  rounded-full flex justify-center items-center absolute md:right-[10%]`} >
             {selected==`${item.name}`?   
<div className='w-2 h-2 bg-[#D4821F]  rounded-full'>
    </div>
:''}
</div>
      </li>
                </div>
            )
        })
    }
     
    </ul>
</div>
:''}
<div className='flex justify-end'>
<div>
    <div className='flex mt-1'>
        <h1 className='text-xs mr-3'>مكياج زبونة</h1>
        <img className='w-4 h-4' src={tru} />
    </div>
    <div className='flex mt-1'>
        <h1 className='text-xs mr-2'>عكف رموش </h1>
        <img className='w-4 h-4' src={tru} />
    </div>
    <div className='flex mt-1'>
        <h1 className='text-xs mr-2'>تنظيف بشرة</h1>
        <img className='w-4 h-4' src={tru} />
    </div>
</div>
</div>
    </div>
  )
}

export default ServicesSelector
