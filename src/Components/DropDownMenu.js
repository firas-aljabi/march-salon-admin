import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";

const Start = ({ paasedarr, onSelectTime }) => {
  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState('Choose date');
  const handleTimeSelection = (time) => {
    onSelectTime(time);
  };
  function asdd() {
    setStart(!start); 
  }

  return (
    <div className=''>
      <div>
        <button
          className='border border-[#000000] p-3'
          type='button'
          onClick={asdd}
        >
          <div className='flex justify-between'>
             <BiChevronDown className={`w-4 h-4 ${start?'rotate-180':''} `} />
            <h2 className='text-[#D4821F] text-[12px]'>{selected}</h2>
          </div>
        </button>
      </div>
      {start && (
        <div
          id='dropdownHover'
          className='z-50 bg-white divide-y divide-gray-100 shadow w-24 h-28 overflow-y-scroll scrollbar-hide absolute border border-black'
        >
          <ul class='py-2 text-sm text-gray-700'>
            {paasedarr.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-white flex justify-between p-1 items-center rounded-lg text-xs'
                  onClick={() => {
                    setSelected(item);
                    setStart(!start);
                    handleTimeSelection(item)
                  }}
                >
                  <li className=' flex justify-between items-center'>
                    <div className='block px-4 py-2 hover:bg-gray-100'>
                      {item}
                    </div>
                    <div
                      className={`w-3 h-3 border ${
                        selected === item
                          ? 'border-[#D4821F]'
                          : 'border-'
                      } rounded-full flex justify-center items-center absolute md:right-[10%]`}
                    >
                      {selected === item ? (
                        <div className='w-2 h-2 bg-[#D4821F] rounded-full'></div>
                      ) : (
                        ''
                      )}
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Start;
