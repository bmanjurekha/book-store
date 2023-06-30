/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a LoginPage.tsx file which contains
 * LoginForm component & function to handle on submit event
 * Using axios Post - username and password in JSON format is posted to api server
 * On Successfull login the access token, username is stored in local storage
 * Using Hook - User role API to get user role data
 * On Guest User Click event navigate (using react-router-dom - useNavigate) to Books Page
 * 
 * 
 */

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LoginForm from "../component/LoginForm";
import { UsegetUserRole } from '../hook/usersroleApi';

const LoginPage = () => {

  const navigate = useNavigate();

  const handleuserSignin = async (username: string, password: string) => {
    const signinPayload = { "username": username, "password": password };
    let resp;
    resp = await axios.post("http://localhost:3000/auth/login", signinPayload)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('username', username);
          localStorage.setItem('access_token', response.data.accessToken);
          localStorage.setItem('isAuthUser', "true");
          UsegetUserRole(response.data.accessToken);
          navigate('/Book');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const navigatetoBook = () => {
    navigate('/Book');
  };
  return (
    <>
      <div className='login-page'>
        <div className='dvGrey'>
          <h2>Login</h2>
        </div>
        <LoginForm onSubmit={handleuserSignin} />
        <div>
          <button className='guestuser-button' onClick={navigatetoBook} type="submit">Proceed as guest user</button>
        </div>
      </div>
    </>
  )
}

export default LoginPage;


