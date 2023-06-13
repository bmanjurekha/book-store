import axios from "axios";
import { useState } from "react";
import UserTable from "../component/UserTable";
import { UsegetUsers } from "../hook/getusersApi";
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const {users} = UsegetUsers(query);   

    const navigatetoBooks = () => {        
      navigate('/Book');
    };
    const navigatetoUsers = () => {        
      navigate('/Users');
    };
    let role = localStorage.getItem('role');
    if(role === 'ADMIN')
    {
      return (
      <>
           
      <input 
        type="text" 
        placeholder="Search query..."  
        className="searchTxt"    
        value={query}  
        onChange={event => setQuery(event.target.value)}
        />
       <button className="btntoprightAddBook"  >Add new book</button>
          <button className="btntoprightBook" onClick={navigatetoBooks} >Books</button>
          <button className="btntoprightUsr" onClick={navigatetoUsers}>Users</button>
      <UserTable users={users} />    
      </>
      )
    }
    else
    {
        return (
            <></>
        )
    }
    
  }
  export default UsersPage;