import React, { useState } from 'react';
import chevrondown from '../Images/chevron-down (10).png'


const DropDownMultiSelect = ({paasedarr,onSelectTime}) => {
  console.log(paasedarr)
   const [start, setStart] = useState(false);
   const [selectednames, setSelectednames] = useState([]);
   const [selectedID, setSelectedID] = useState([]);
 
   const handleToggle = (itemId, itemName) => {
     if (selectednames.includes(itemName)) {
       setSelectednames(selectednames.filter((item) => item !== itemName));
       setSelectedID(selectedID.filter((item) => item !== itemId));
 
       onSelectTime(selectedID.filter((item) => item !== itemId))
     } else {
       setSelectednames([...selectednames, itemName]);
       setSelectedID([...selectedID, itemId]);
 
       onSelectTime([...selectedID, itemId])
 
     }
   };
 
   function asdd() {
     setStart(!start);
   }
 
   return (
     <div className='w-[100%]'>
       <div className=''>
         <button
           className='border border-black bg-[#F7F7F8] p-2 w-[100%] h-11'
           type='button'
           onClick={asdd}
         >
           <div className='flex relative'>
              <img src={chevrondown} className={`w-4 h-4 ${start?'rotate-180':''} `}/> 
             <h2 className='text-xs text-[#D4821F] absolute right-[0%]'>
             {selectednames.length==0?"اختر المناسبة":selectednames.join(' , ')}
             </h2>
           </div>
         </button>
       </div>
       {start && (
         <div
           id='dropdownHover'
           className='z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 absolute'
         >
           <ul className='py-2 text-sm'>
             {paasedarr.map((item) => (
               <div
                 key={item.id}
                 onClick={() => handleToggle(item.id, item.name)}
                 className='bg-white p-1 items-center rounded-lg text-xs'
               >
                 <div className='flex justify-between'>
                   <h1>{item.name}</h1>
                   <div>
                     <button
                       className='h-5'
                       onClick={() => handleToggle(item.id, item.name)}
                     >
                       {selectednames.includes(item.name) ? (
                          <div className='border-2 border-[#F9C688] rounded-full p-0.5'>
                           <div className='bg-[#F9C688] p-1 rounded-full'></div>
                         </div>
                       ) : (
                         <div className='border-2 border-[#B5B5B5] p-1.5 rounded-full'></div>
                       )}
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </ul>
         </div>
       )}
     </div>
   );
 };
 
 export default DropDownMultiSelect;