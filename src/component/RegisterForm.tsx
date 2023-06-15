/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a RegisterForm.tsx component which contains form to submit user name n password.
 * setting the form properties. This component has useState  which holds current state and can change over time.
 * Using react router dom - Link to redirect user to sign in or login page if user already has account.
 * 
 */
import { FormEvent, useState } from "react";
import { Link } from 'react-router-dom';

type submitHandler = (username: string, password: string) => void;

interface RegisterFormProps {
  onSubmit: submitHandler;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(username, password);
  }

  return (
    <>

      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type your username..."
            value={username}
            className="lrTxt"
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
            value={password}
            className="lrTxt"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Already have an account? Sign in<Link to="/"> here!</Link></label>
        </div>
        <div>
          <button className='signin-button' type="submit">Register New Account</button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm;