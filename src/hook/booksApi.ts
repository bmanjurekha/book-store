import {  useState } from "react"
import { Book } from "../model/book"
import axios from "axios";

const UsegetBooks = (query: string) => {
    const [books, setBooks] = useState([] as Array<Book>); 
    const timeoutId = setTimeout(async () => { 
      let resp; 
          if(query === '') { 
          resp = await axios.get("http://localhost:3000/library/books");
          }
          else
          {
            resp = await axios.get("http://localhost:3000/library/books/search?q="+query);
          }
      setBooks(resp.data.books);
    }, 2000);
    
    return {books};
}

export { UsegetBooks };