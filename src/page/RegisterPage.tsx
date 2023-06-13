
import axios from "axios";
import { useState } from "react"
import RegisterForm from "../component/RegisterForm";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const handleregisterUser = async (username: string, password: string) => {
      const registerPayload = { "username": username,"password":password };
      let resp;     
      resp = await axios.post("http://localhost:3000/auth/register",registerPayload)
      .then(response => {
        if(response.status === 201){
          navigate('/');
        }
        })
      .catch(error => {
        console.log(error);
        }) ;      
      }
    return (
        <>
        <div className='login-page'>
            <div className='dvGrey'>
            <h2>Register</h2>  
             </div>
          <RegisterForm onSubmit={handleregisterUser} />
        </div>
        </>
      )
  }

export default RegisterPage;


