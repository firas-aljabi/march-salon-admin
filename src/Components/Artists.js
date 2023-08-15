import React, { useEffect, useState } from 'react';
import ather from '../Images/Ather.png';
import aydah from '../Images/Aydah.png';
import sabah from '../Images/Sabah.png';
import sarah from '../Images/Sarah.png';
import sukar from '../Images/Sukar.png';
import blank from '../Images/Blank.png';
import axios from 'axios';

function Artists({ onArtistClick }){
const [artistsData, setArtistsData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
   
  const handleRowClick = (index) => {
    setSelectedRow(index);
    onArtistClick(artistsData[index]);
  };
  
  useEffect(() => {
    fetchArtistsData();
  }, []);
  
  const fetchArtistsData = async () => {
    try {
      const response = await axios.get('https://api.march.gomaplus.tech/api/list_of_experts', {
        headers: {
          
          'Authorization':  `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      setArtistsData(response.data.data);
    } catch (error) {
      console.error('Error fetching artists data:', error);
    }
  };

  const generateRows = () => {
    return artistsData.map((artist, index) => (
        <tr
        key={index}
        className={`border-b-2 border-r-2 border-[#F9C688] ${selectedRow === index ? 'bg-[#F9C688]' : ''}`}
        onClick={() => handleRowClick(index)}
      >
            
        <td className='py-2'>{artist.position}</td>
        <td className={` ${selectedRow === index ? '' : ''} flex flex-col justify-center sm:flex-row sm:justify-between p-3 border-l-2  border-r-2 border-[#F9C688]`}>
          <p className='text-center mt-3 sm:text-right sm:w-24 whitespace-nowrap'>{artist.name}</p>
        </td>
        <td className='py-2'>{artist.id}</td>

      </tr> 
    ));
  };

  return (
    <div className='w-[100%] h-[100%] '>
      <table className='w-full text-center'>
        <thead>
          <tr className='border-b-2 border-[#F9C688] bg-[#F5C8906E] h-14'>
            <th className='font-bold'>الاختصاص</th>
            <th className='font-bold'>الاسم</th>
            <th className='font-bold'>ID</th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
        
      </table>
    </div>
  );
}

export default Artists;
