import React, { useEffect, useState } from 'react';
import LoginBg from '../Images/LoginBackground.png';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import axios from 'axios';
import message from '../Images/2150335821535007646-128 1.png'
import lock from '../Images/1719662671537184109-128 1.png'

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   localStorage.clear('token')
  //   if (errora) {
  //     console.log("Store Product Error Message:", errora.message);
  //     setError("Wrong Email or password");
  //   }
  //   else {
  //     setError("") ;
     
  //   }
  // }, []);

  async function handleLogin (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    formData.append('email', userEmail);
    formData.append('password', password);
    try {
      const response = await axios.post(`https://api.march.gomaplus.tech/api/login`,formData);
      console.log(response.data.user.type);
  if(response.data.user.type==2){
    localStorage.setItem('token', response.data.token);
    navigate("/transitions");
  }
     
else{
  console.log("fuck you")
}
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
        
      return false;
    }

    setTimeout(checkForAuth, 2000);

  };

  const checkForAuth=()=>{
  if(    localStorage.getItem('token')!=undefined &&localStorage.getItem('token')!=null&&localStorage.getItem('token')!=''){
    console.log('goin')
    navigate("/home");

  }
  else{
    console.log('error')
  }
  
}
  return (
    <div className='min-h-screen flex  absolute top-0 right-0 left-0 justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${LoginBg})` }}>
      <div className='w-full max-w-sm bg-white bg-opacity-60 p-8'>
        <h1 className='text-3xl text-white text-center mb-8'>تسجيل دخول</h1>
        <form>
          <div className='mb-4 relative'>
            <img className='absolute mt-4 w-5 h-5 right-[5%]' src={message} />
            <input
            onChange={(e) => setUserEmail(e.target.value)}
              type='email'
              placeholder='البريد الالكتروني'
              className='w-full h-12 pr-10 px-3 bg-white bg-opacity-10 border border-black placeholder-black text-right'
            />
            
          </div>
          <div className='mb-4 relative'>
             <img className='absolute mt-4 w-4 h-4 right-[5%]' src={lock} />
            <input
            onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='كلمة السر'
              className='w-full h-12 pr-10 px-3 bg-white bg-opacity-10 border border-black placeholder-black text-right'
            />
          </div>
          {/** <div className='mb-6'>
            <a href='#' className='text-sm  text-black hover:text-gray-800 block'>
              هل نسيت كلمة السر؟
            </a>
          </div>
          */}
          <button className='w-full h-12 bg-gradient-to-b from-[#FFD7A6] to-[#E3AB67] text-white text-base mt-4 mb-2 drop-shadow-xl  shadow-white' onClick={handleLogin} >تسجيل دخول</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
