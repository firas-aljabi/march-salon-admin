import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Calendar from '../Components/Calandar';
import Artists from '../Components/Artists';
import search from '../Images/search (6).png';
import plus from '../Images/plus (4).png'
import AddTransition from '../Models/AddTransition';
import AddExpert from '../Models/AddExpert';
import Permissions from '../Models/Permissions';

export const Experts = () => {

   const [showAdd , setShowAdd] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtist, setSelectedArtist] = useState(null);
  const [artistHolidays, setArtistHolidays] = useState([]);
   const [filter,setFilter] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    if (selectedArtist) {
      setArtistHolidays(selectedArtist.holidays);
    }
  }, [selectedArtist]);
  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
    console.log(artist)

  }
  return (
    <div>
    <div className='w-full h-full bg-white mb-7'>
    <div>
        </div>
        <div className='flex justify-center items-center'>
        <div className='w-[90%] items-center flex justify-center h-[100%]'>
        <div className='w-[100%] h-[80%]'>
          {/** */}
          <div className='flex justify-between mt-6'>
            <div className='flex justify-between'>
            <button className='border border-[#EC1630] text-sm flex justify-center mr-2'  onClick={()=>{setFilter(true)}}>
                <p className='flex justify-center items-center mt-2 ml-3 text-center text-[#EC1630]'>تعديل السماحيات</p>
                <img src={plus} className='mt-3 w-5 h-5'/> 
                </button>
                <button className='h-9 w-40 bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] text-white text-sm flex justify-evenly shadow-inner shadow-white'  onClick={()=>{setShowAdd(true)}}>
                <p className='mt-2'>اضافة خبيرة</p>
                <img src={plus} className='mt-2 w-5 h-5'/> 
                </button>
          </div>
            <div className='flex'>
           <div className='relative'>
             {/**    <img src={search} alt="Search Icon" class="absolute right-[6%] w-4 h-4 mt-3 z-10"/>
                <input type="text" placeholder="البحث" class=" w-46 h-9 border border-[#E3AB67] placeholder:text-[#E3AB67] placeholder:text-right placeholder:text-sm placeholder:mr-5 py-2 px-2 relative " />
           */} </div>
          <h2 className='text-2xl text-right ml-2'>الخبراء</h2>
          </div>
          </div>
          {/** */}
          <div className='w-full h-full grid md:grid-cols-2 mt-6'>
            <div className='w-[100%] h-full bg-[#FBE7CF57] '>
            <Calendar selectedArtist={selectedArtist}  />
            </div>
            <Artists onArtistClick={handleArtistClick} />
          </div>
        </div>
      </div>
      </div> 
    </div>
    <AddExpert onClose={()=>{setShowAdd(false)}} visible={showAdd}/>
    <Permissions onClose={()=>{setFilter(false)}} visible={filter}/>
  </div>
  )
}
