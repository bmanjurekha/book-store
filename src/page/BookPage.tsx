import { useState } from "react";
import BookTable from "../component/BookTable";
import { UsegetBooks } from "../hook/booksApi";
import { useNavigate } from 'react-router-dom';


const BookPage = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const {books} = UsegetBooks(query); 

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
       <BookTable books={books} />    
      </>
      )
    }
    else
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
            <BookTable books={books} />
          
        </>
      )
    }
  }
  export default BookPage;