import React, { useState } from 'react'



const PermissionSelector = () => {
     const array=[
{name : "سيرين", id:"1" },
{name : "سارة ", id:"2" },
{name : "سميرة", id:"3" },
{name : "سعاد", id:"4" },
]
const [arr,setarr]=useState([])
     const [toggledItems, setToggledItems] = useState({});
    function handleToggle (itemId) {
// Update the state for the clicked item
        setToggledItems((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId], // Toggle the state for the clicked item
        }));

console.log(arr)
    }
    const [start,setStart]=useState(false)
  const [selected,setSelected]=useState('الموظفة المسؤولة')
console.log(selected)

  function asdd(){
    setStart(!start)
 }
  return (
    <div className='w-screen mt-5'>
        <div className='flex justify-center'>
      <button className=" border border-[#000000]  p-3 w-[80%]" type="button"
onClick={asdd}
>
      <div className='flex relative'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-5 h-5 ${start?'rotate-180':''} `}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
          <h2 className='text-xs absolute right-[0%]'>{selected}
  </h2>
      </div>
</button>
   </div>
   {start?
<div id="dropdownHover" className="z-50 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-32">
    <ul class="py-2 text-sm ">
     {
        array.map((item) => {
            return(
                <div key={item.id}  className='bg-white flex justify-between p-1 items-center rounded-lg text-xs'>
                    <li className=' flex justify-between items-center 'onClick={()=>{setSelected(item.name)}}>

        <div  className="block px-2 py-1 hover:bg-gray-100">
             {item.name}</div>
              <button className={`w-3 h-3 border  ${selected==`${item.name}`?'border-[#D4821F]':'border-'}  rounded-full flex justify-center items-center absolute md:right-[10%]`} onClick={() => handleToggle(item.id)}>
                {toggledItems[item.id] ? <div className='border'></div>: <div className='border- border-red-600'></div>}
              </button>
              
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

export default PermissionSelector
