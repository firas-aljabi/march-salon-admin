import React, { useState } from 'react'
import chevrondown from '../Images/chevron-down (10).png'



const DropDown = ({paasedarr}) => {
    const [start,setStart]=useState(false)
  const [selected,setSelected]=useState('الموظفة المسؤولة ')
console.log(selected)

  function asdd(){
    setStart(!start)
 }
  return (
    <div className='lg:w-72 sm:divide-x mb-5 items-center sm:flex-row flex-col'>
        <div className=''>
      <button className=" border border-[#000000]  p-3 w-[100%] " type="button"
onClick={asdd}
>
      <div className='flex relative'>
   <img src={chevrondown} className={`w-4 h-4 ${start?'rotate-180':''} `}/> 
          <h2 className='text-[#D4821F] absolute right-[0%]'> {selected}
  </h2>
      </div>
</button>
   </div>
   {start?
<div id="dropdownHover" className="z-50  bg-white divide-y divide-gray-100 rounded-lg shadow w-32  absolute">
    <ul class="py-2 text-sm ">
    
       {
        paasedarr.map((item) => {
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
    </div>
  )
}

export default DropDown
