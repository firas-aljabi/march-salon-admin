import React, { useEffect, useState } from 'react'
import row from '../Images/chevron-down (11).png'
import PermissionSelector from '../Components/PermissionSelector'
import MutibleChoisDropDown from '../Components/MutibleChoisDropDown'
import axios from 'axios'


const Permissions = ({onClose, visible}) => {
  useEffect(()=>{
    getResiptions()
  },[])
   const [cancel, setcancel] = useState('');
   const [delay, setdelay] = useState('');
//chang_permission

   const [arrayofresiption, setarrayofresiption] = useState(null);

   async function getResiptions() {
    try {
      const response = await axios.get('https://api.march.gomaplus.tech/api/list_of_receiptions', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const formattedData = response.data.data.map(item => ({
        name: item.name,
        id: item.id.toString(), 
        permission_to_cancle:item.permission_to_cancle,
        permission_to_delay:item.permission_to_delay
      }));
      
      console.log(formattedData);
      setarrayofresiption(formattedData)
   
    } catch (error) {
      console.log(error);
    }
  }
  

   const handlecancel = (time) => {
    setcancel(time);
    console.log(time)

  };
  const handledelay = (time) => {
    setdelay(time);
    console.log(time)

  };
  

  async function handlesubmite() {
    if (!cancel || cancel.length === 0) {
      console.log("No IDs to process.");
      return;
    }
  
    try {
      for (const id of cancel) {
        const requestData = {
          receiption_id: id,
          type: 2,
          can: 1,
        };
  
        const response = await axios.post(
          `https://api.march.gomaplus.tech/api/chang_permission`,
          requestData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
            },
          }
        );
  
        console.log(`Permission changed for ID ${id}:`, response.data);
      }
  
      if (arrayofresiption && arrayofresiption.length > 0) {
        for (const item of arrayofresiption) {
          if (!cancel.includes(item.id.toString())) {
            const requestData = {
              receiption_id: item.id,
              type: 2,
              can: 0,
            };
  
            const response = await axios.post(
              `https://api.march.gomaplus.tech/api/chang_permission`,
              requestData,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  Accept: "application/json",
                },
              }
            );
  
            console.log(`Permission changed for ID ${item.id}:`, response.data);
          }
        }
      }
  

      for (const id of delay) {
        const requestData = {
          receiption_id: id,
          type: 1,
          can: 1,
        };
  
        const response = await axios.post(
          `https://api.march.gomaplus.tech/api/chang_permission`,
          requestData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
            },
          }
        );
  
        console.log(`Permission changed for ID ${id}:`, response.data);
      }
  
      if (arrayofresiption && arrayofresiption.length > 0) {
        for (const item of arrayofresiption) {
          if (!cancel.includes(item.id.toString())) {
            const requestData = {
              receiption_id: item.id,
              type: 1,
              can: 0,
            };
  
            const response = await axios.post(
              `https://api.march.gomaplus.tech/api/chang_permission`,
              requestData,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  Accept: "application/json",
                },
              }
            );
  
            console.log(`Permission changed for ID ${item.id}:`, response.data);
          }
        }
      }
  
      console.log("All permission changes completed.");
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
if(!visible) return null

  return (
    <div className=' fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
            <div  className='lg:w-[37%] md:w-[50%] w-[80%] sm:w-[70%]  h-[70%] bg-white p-5 pl-10 pr-10'>
             <div className='flex justify-center'>
                <img onClick={onClose} className=' w-[8%] h-[8%] mr-20' src={row} />
                <h2 className='flex justify-center mb-[5%] text-xl mr-20'>تعديل السماحيات</h2>
            </div>
             <h1 className='text-end'>:إمكانية <span className='text-[#EC1630]'>إلغاء</span> الحجز من قبل</h1>
             <div className='flex justify-center items-center'> 
             <MutibleChoisDropDown paasedarr={arrayofresiption} onSelectTime={handlecancel}/>
             </div>
             <h1 className='text-end mt-8'>:إمكانية <span className='text-[#EC1630]'>تعديل</span> الحجز من قبل</h1>
             <div className='flex justify-center items-center'> 
             <MutibleChoisDropDown paasedarr={arrayofresiption} onSelectTime={handledelay}/> 
             </div>
             <div className='flex justify-center'>
             <div className='flex justify-center items-center bg-gradient-to-b  from-[#FFD7A6] to-[#E3AB67] mt-16 p-3 border w-[80%]'>
              <button onClick={()=>{handlesubmite()}} className='text-white'>حفظ </button>
               </div>
               </div>
           
    </div>
    </div>
  )
}

export default Permissions
