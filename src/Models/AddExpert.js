import React, { useState } from 'react'
import ServicesSelector from '../Components/ServicesSelector'
import SelectImage from '../Components/SelectImage'
import row from '../Images/chevron-down (11).png'
import axios from 'axios'
const AddExpert = ({onClose, visible}) => {
  const [name , setname] = useState("")
  const [selectedImageURL, setSelectedImageURL] = useState(null); // New state for selected image URL

  const [expert , setexpet] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setSelectedFile(file);
    setSelectedImageURL(URL.createObjectURL(file)); // Set the selected image URL

  }


    async function handleReservation () {
   
      const formData = new FormData();
      
      formData.append('name', name); // Attach the selected file
      formData.append('position', expert); // Attach the selected file

      formData.append('image', selectedFile); // Attach the selected file
      try {
        const response = await axios.post(
          `https://api.march.gomaplus.tech/api/create_expert`,
    
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'multipart/form-data',
    
            },
          }
        );
        console.log('Response:', response);
       
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        // You can also log error.response.data to see more details from the server response
        return false;
      }
      
      };

    if(!visible) return null

    
  return (
   <div className='fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
            <div  className='lg:w-[30%] md:w-[50%] h-[88%] bg-white p-5 pl-10 pr-10 -z-50'>
             <div className='flex justify-center'>
                <img onClick={onClose} className=' w-[8%] h-[8%] mr-20' src={row} /> 
                <h2 className='flex justify-center mb-[5%] text-xl mr-20'>إضافة خبيرة</h2>
            </div>
             <div className=' bg-[#F7F7F8] border mb-3 mt-3 '>
                <h4 className='text-right text-xs text-[#B5B5B5] mr-2'>الاسم</h4>
                <input className='bg-transparent outline-none w-[100%]'
                onChange={(e) => setname(e.target.value)} />
                </div>
                <div className=' bg-[#F7F7F8] border mb-3 '>
                <h4 className='text-right text-xs text-[#B5B5B5] mr-2'>اخصائية </h4>
                <input className='bg-transparent outline-none w-[100%]'
                onChange={(e) => setexpet(e.target.value)} />
                </div>
           {/**  <ServicesSelector/>*/}
         
           
           <div>
           <div className='mt-2'> 
           <h1 className='text-xs text-end'><span className='mr-2 text-lg text-[#EC1630]'>*</span>الصورة الشخصية</h1>
           <label htmlFor="fileInput" className="cursor-pointer">
             {/* Invisible input file element */}
          
             <input
               type="file"
               id="fileInput"
           
               onChange={handleFileChange}
               className="hidden"
             />
             <div className='bg-[#F7F7F8] border border-[#B4B4B4] border-dashed flex justify-center items-center h-28'>
             
             {selectedImageURL ? (
              <img src={selectedImageURL} alt='Selected' className='max-h-full' />
            ) : (
              ''
            )}
             </div>
           </label>
         
           <h1 className='text-[9px] text-[#828282CC] text-end'>هذا الحقل اختياري<span className='ml-1'>*</span></h1>
         </div>
         
    
                   <div className='flex justify-center bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] mt-2 p-3 border w-[100%]'>
                   <button onClick={()=>{handleReservation()}} className='text-white'>حفظ </button>
                    </div>
         </div>




    </div>
    </div>
  )
}

export default AddExpert
