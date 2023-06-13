/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a LoginForm.tsx component which contains form to submit user name n password.
 * setting the form properties. This component has useState  which holds current state and can change over time.
 * Using react router dom - Link to sign up register page if there is no account.
 * 
 */


import { FormEvent, useState } from "react";
import { Link } from 'react-router-dom';


type submitHandler = (username: string, password: string) => void;
 
interface LoginFormProps {
  onSubmit: submitHandler;
}

const LoginForm = ({onSubmit}: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSigninSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(username, password);
    
  }

return (
    <>
    
      <form onSubmit={handleSigninSubmit}>
          <div>
              <label>Username</label>
          </div>
          <div>
              <input 
              type="text" 
              placeholder="Type your username..." 
              className="lrTxt"
              value={username}      
              onChange={e => setUsername(e.target.value)}         
              />
          </div>
          <div>
              <label>Password</label>
          </div>
          <div>
              <input 
              type="password" 
              placeholder="Type your password..."
              className="lrTxt"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
          </div>
          <div>
            
              <label>No Account? Sign up<Link to="./Register"> here!</Link></label>
          </div>
          <div>
          <button className='signin-button' type="submit">Sign in</button>
          </div>
      </form>
    </>
  )
}

  export default LoginForm;