import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import chevrondown from '../Images/chevron-down (10).png'


const Reservation = ({clients, onSelectClient}) => {
  const [data, setdata] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const handleTimeSelection = (time) => {
    onSelectClient(time);
  };
  useEffect(() => {
  
        setdata(clients);
  }, [clients]);
  return (
   
    <div className="w-full font-medium ">
      <div
        onClick={() => setOpen(!open)}
        className={` flex items-center rounded relative ${
          !selected && "text-gray-700"
        }`}
      >
       <img src={chevrondown} className={`w-4 h-4  ml-3 ${open?'rotate-180':''} `}/>  
         <input
            type="text"
            value= {
          inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            placeholder=""
            className="placeholder:text-gray-700 p-3 w-[100%] placeholder:pl-5 outline-none bg-[#F7F7F8] h-8" 
          />
      </div>
      <ul
        className={`bg-white overflow-y-scroll absolute w-52 scrollbar-hide ${
          open ? "max-h-40 " : "max-h-0"
        } `}
      >
      
        {data?.map((country) => (
          <li
            key={country.id}
            className={`p-2 text-sm hover:bg-gray-100
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-gray-100 "
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country.name.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country.name);
                setOpen(false);
                setInputValue(country.name);
                handleTimeSelection(country.id)
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Reservation
