import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TransitionInfo from '../Models/TransitionInfo';
import { AiOutlineSwapRight } from "react-icons/ai";
import { AiOutlineSwapLeft } from "react-icons/ai";
import ImageShow from '../Models/ImageShow';

const TransitionsTable = ({data}) => {

    const navigate = useNavigate()

    

        const onChange = (e) => {
            setValue(e.target.value)
        } 

        const [value,setValue] = useState('') 
         const [showPost , setShowPost] = useState(false);
             const handleOnClose = () => setShowPost(false)
        const [showInfo , setShowInfo] = useState(false);
        const [selected, setSelected] = useState(null)
                const [selectedimage, setselectedimage] = useState('')

        const [currentPage, setCurrentPage] = useState(1)
        const recordesPerPage = 7;
        const lastIndex = currentPage *  recordesPerPage;
        const firstIndex = lastIndex - recordesPerPage;
        const records = data.slice(firstIndex,lastIndex);
        const nPage = Math.ceil(data.length / recordesPerPage);
        const numbers = [...Array(nPage + 1).keys()].slice(1);

        function prePage () {
            if(currentPage !== 1){
                setCurrentPage(currentPage - 1)
            }
        }
         function changeCPage (id) {
            setCurrentPage(id)
        }
         function nextPage () {
             if(currentPage !== nPage){
                setCurrentPage(currentPage + 1)
            }
        }

        const handleRow = (info) => {
            setShowInfo(true)
            setSelected(info)
        }

        console.log(showInfo)
  return (
    <div>
    <table className='w-full h-full text-center border-2 border-[#F5C8909E] '>
                  <tr className='h-14'>
                       <td className='bg-[#F5C8906E] font-bold'>تاريخ التحويل</td>
                       <td className='bg-[#F5C8906E] font-bold'>المرفق</td>
                       <td className='bg-[#F5C8906E] font-bold'>المبلغ</td>
                       <td className='bg-[#F5C8906E] font-bold'>الاسم</td>
                       <td className='bg-[#F5C8906E] font-bold'>ID</td>
                  </tr>
                  <tbody>
                 {
                     records.map((data,index) => (
                   
                         <tr className='hover:bg-[#D9D9D994]' onClick={()=>{handleRow(data)}} key={index} >
                               
                            <td className='border-2 border-[#F5C8909E] p-3'>{data.date}</td>
                            <td className='border-2 border-[#F5C8909E] p-3' >
                            <a onClick={() => {setShowPost(true);setselectedimage(data.attachment)}}  className='border-b-2 border-black'>مرفق التحويلة</a>
                            </td>
                            <td className='border-2 border-[#F5C8909E] p-3'>{data.transfer_amount}</td>
                            <td className='border-2 border-[#F5C8909E] p-3'>{data.client.name}</td>
                            <td className='border-2 border-[#F5C8909E] p-3'>{data.id}</td>
                         </tr>
                         
                     ))  
                 }
                  <div>
                     
                 </div>
                  </tbody>
                  </table>
                  <div>
                     <ul className=''>
                        
                         <div className='flex justify-end mt-5'>
                         {
                             numbers.map((n , i) => (
                                 <li className={` ${currentPage === n ? 'bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] text-white p-1  pl-3 pr-3  ' : 'bg-white p-1 pl-3 pr-3'}`} key={i}>
                                     <div  onClick={() => changeCPage(n)}>{n}</div>
                                 </li>
                             ))
                         }
                         </div>
                         <div className='flex justify-end '>
                          <li>
                             <div  className='' onClick={prePage}><AiOutlineSwapLeft/></div>
                         </li>
                          <li>
                             <div  className='' onClick={nextPage}><AiOutlineSwapRight/></div>
                         </li>
                         </div>
                     </ul>
                  </div>
            {/* <Update  onClose={handleOnClose} visible={showPost} />   */}
            <TransitionInfo onChange={onChange} onClose={()=>{setShowInfo(false)}} data={selected} visible={showInfo}/>
            <ImageShow  onClose={handleOnClose} passedimage={selectedimage} visible={showPost}/>
 </div>

  )
}

export default TransitionsTable