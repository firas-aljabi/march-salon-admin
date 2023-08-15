import React, {useEffect, useState} from 'react'
import TransactionInput from '../Components/TransitionInput'
import row from '../Images/chevron-down (11).png'
import axios from 'axios'
import Reservation from '../Components/ReservationInput'
const AddTransition = ({onClose, visible}) => {
const[date,setdate]=useState('')
const[transfer_amount,settransfer_amount]=useState(0)
const[names,setnames]=useState([])
const[SelectedClient,setSelectedClient]=useState('')
const clientssUrl='https://api.march.gomaplus.tech/api/list_of_client'
const handleClientSelection = (time) => {
  setSelectedClient(time);
  console.log(time)

};
async function getclients (e) {
try {
  const response = await axios.get(clientssUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json', // Set the content type to JSON

    },
  });
  console.log(response.data.data);
  setnames(response.data.data)
 
  return response.data.data;
} catch (error) {
  console.error( error);
    
  return false;
}}
useEffect(()=>{
  getclients()

},[])
async function handleReservation () {
   
    const formData = new FormData();
    
    formData.append('client_id', SelectedClient); // Attach the selected file
    formData.append('date', date); // Attach the selected file
    formData.append('transfer_amount',transfer_amount); // Attach the selected file
    formData.append('attachment', selectedFile); // Attach the selected file

  console.log(SelectedClient)
  console.log(date)
  console.log(transfer_amount)
  console.log(selectedFile)

    
    try {
      const response = await axios.post(
        `https://api.march.gomaplus.tech/api/create_transfer`,
  
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
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0]; // Get the selected file
      setSelectedFile(file);}

    if(!visible) return null

    return (
      <div className=' fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
      <div  className='lg:w-[34%] md:w-[50%] sm:w-[60%] w-[90%] h-[70%] bg-white p-5 pl-10 pr-10'>
       <div className='flex justify-center'>
        <img onClick={onClose} className=' w-[8%] h-[8%] mr-20' src={row} /> 
          <h2 className='flex justify-center mb-[5%] text-xl mr-20 '>اضافة تحويلة</h2>
   </div>

 <div className=' bg-[#F7F7F8] border mb-3 mt-3'>
   <h4 className='text-right text-[12px] opacity-50 mr-2'>{'الاسم'}</h4>
   <Reservation  clients={names} onSelectClient={handleClientSelection}/>
</div>

   <div className=' bg-[#F7F7F8] border mb-3 mt-3 h-12'>
   <h4 className='text-right text-[12px] opacity-50 mr-2'>{'تاريخ التحويل '}</h4>
   <input className='bg-transparent outline-none text-right w-[100%]' value={date}
   onChange={(e)=>{setdate(e.target.value)}}/>
   </div>



   <div className=' bg-[#F7F7F8] border mb-3 mt-3 h-12 '>
   <h4 className='text-right text-[12px] opacity-50 mr-2'>{'المبلغ'}</h4>
   <input className='bg-transparent outline-none text-right w-[100%]' value={transfer_amount}
   onChange={(e)=>{settransfer_amount(e.target.value)}}/>
   </div>



           <div className=' bg-[#F7F7F8] border mb-3 mt-3 h-12 '>
                <h4 className='text-right text-[12px] opacity-50 mr-2'>ملف الحوالة</h4>
                <input className='bg-transparent outline-none text-right w-[100%]' type='file'
                onChange={handleFileChange}/>
                </div>
          <div className='flex justify-center bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] mt-10 p-3 border w-[100%] '>
        <button onClick={()=>{handleReservation()}} className='text-white'>حفظ </button>
         </div>
  </div>
  </div>
    )
}

export default AddTransition