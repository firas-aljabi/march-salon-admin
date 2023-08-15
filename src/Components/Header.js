import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/Logo.png'

const Header = ({button}) => {
     let navigate=useNavigate()
    const [activeLink, setActiveLink] = useState(null);
  
    const handleLinkClick = (index) => {
      setActiveLink(index);
      // You can perform additional actions here when a link is clicked
    };

  return (
    <div className='w-full h-16 flex justify-center items-center'>
        <div className='w-[90%] h-[100%] flex justify-between mt-3'>
            <div className='w-[30%]'>
                <button className='w-[50%] h-[80%] border-2 border-black' onClick={()=>{navigate('/')}}>تسجيل خروج</button>
            </div>
            <div className='w-[40%] h-[80%] flex justify-center items-center'>
               <div className='w-96 flex justify-end items-center'>
        <div>
          <h2
            className={`relative mt-5 mr-20 cursor-pointer ${
              activeLink === 0 ? 'text-[#D4821F]' : ''
            }`}
            onClick={() => {handleLinkClick(0) ; navigate('/experts')}}
          >
            الخبراء
            {activeLink === 0 && (
              <div className='absolute w-6 bottom-[-10] right-0 bg-[#D4821F] h-0.5'></div>
            )}
          </h2>
        </div>
        <div>
          <h2
            className={`relative mt-5 cursor-pointer ${
              activeLink === 1 ? 'text-[#D4821F]' : ''
            }`}
            onClick={() => {handleLinkClick(1) ; navigate('/transitions')}}
          >
             التحويلات البنكية
            {activeLink === 1 && (
              <div className='absolute w-12 bottom-[-10] right-0 bg-[#D4821F] h-0.5'></div>
            )}
          </h2>
        </div>
      </div>
            </div>
            <div className='w-[30%] h-[80%] flex justify-end items-center'>
                <img src={logo} className='w-20 h-20'/>
            </div>
        </div>
    </div>
  )
}

export default Header