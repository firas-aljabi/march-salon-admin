import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import TransitionsTable from '../Components/TransitionsTable';
import AddTransition from '../Models/AddTransition';
import Filter from '../Models/Filter';
import axios from 'axios';
const Transitions = () => {
    const [data,setdata]=useState([])
    useEffect(() => {
        getReservations()
      }, []);
    async function getReservations(){
        const response = await     axios .get('https://api.march.gomaplus.tech/api/list_of_transfers', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          // Filter and organize the response data
         console.log(response.data.data)
         setdata(response.data.data)
       
        })
        .catch((err) => console.log(err));
      }
  
    const [showAdd , setShowAdd] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter,setFilter] = useState(false)

    
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

    const filteredData = data.filter((item) => {
      const clientNameMatches = item.client.name.toLowerCase().includes(searchTerm.toLowerCase());
      const dateMatches = item.date.toLowerCase().includes(searchTerm.toLowerCase()); // Assuming `item.date` is a string
      const transferAmountMatches = item.transfer_amount.toString().includes(searchTerm); // Assuming transfer_amount is a number

      return clientNameMatches || dateMatches||transferAmountMatches ;
            // Add more filtering logic here based on other criteria if needed
      });
      async function downloadExil() {
        try {
          const response = await axios.get('https://api.march.gomaplus.tech/api/export', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            responseType: 'arraybuffer', // Ensure the response is treated as binary data
          });
      
          const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
          // Create a URL for the Blob
          const blobUrl = URL.createObjectURL(blob);
      
          // Create a link and click it to trigger download
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'downloaded_file.xlsx'; // Set the desired file name
          link.click();
      
          // Clean up the Blob URL
          URL.revokeObjectURL(blobUrl);
        } catch (error) {
          console.log(error);
          // Handle the error appropriately (show an error message, etc.)
        }
      }
  return (
    <div className='w-full h-full overflow-x-scroll'>
        <div>
        </div>
        <div>
        <div className=' h-screen bg-white items-center flex justify-center'>
            <div className='w-[88%] h-[90%]'>
                <div className='flex justify-between mt-10'>
                    <div className='flex gap-2 w-[53%]'>
                 <button onClick={()=>{downloadExil()}} className='w-32 h-12 text-white text-sm flex items-center justify-evenly border-2 border-[#36C44E] shadow-sm'>
                <p className=' text-[#36C44E] md:text-md'>تحميل إكسل</p>
                {/* <img src={load} className='mt-3 w-4 h-4'/> */}
                </button>
           {/**    <button className='w-40 h-12 bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] text-white  text-sm flex justify-evenly shadow-inner shadow-[#fbbccf]' onClick={()=>{setFilter(true)}}>
                    <p className='mt-3 md:text-md text-xs'>فلترة التحويلات</p>
              <img src={filter} className='mt-3 w-5 h-5'/>
                </button>
            */}  
                <button className='w-32 h-12 bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] text-white items-center text-sm flex justify-evenly shadow-inner shadow-[#fbbccf]' onClick={()=>{setShowAdd(true)}}>
                <p className=' md:text-md'>اضافة تحويلة</p>
                {/* <img src={plus} className='mt-3 w-5 h-5'/> */}
                </button>
                <div>
                    {/* <img src={searchOrange} alt="Search Icon" class="absolute left-[51%] w-4 h-4 mt-4 z-50"/> */}
                <input type="text" placeholder="البحث" class="w-36 h-12 border border-[#E3AB67] placeholder:text-[#E3AB67] placeholder:text-right placeholder:text-sm placeholder:mr-5 py-2 px-3 relative "   onChange={handleSearch}/>
                </div>
                </div>
                    <h2 className='md:text-3xl text-lg text-right'>التحويلات البنكية للزبائن</h2>
                </div>
                <div className='mt-8'>
               <TransitionsTable data={filteredData}/>
                </div>
            </div>
        </div>
        </div>
        <AddTransition onClose={()=>{setShowAdd(false)}} visible={showAdd}/>
        <Filter onClose={()=>{setFilter(false)}} visible={filter}/>
    </div>
  )
}

export default Transitions