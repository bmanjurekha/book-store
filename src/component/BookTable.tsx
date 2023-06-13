import { Book } from "../model/book"
import { ReactComponent as AddIcon } from '../assets/216373_plus_icon.svg';
import { ReactComponent as MinusIcon } from '../assets/216340_minus_icon.svg';
import { useState } from "react";
import { setConstantValue } from "typescript";
interface BookTableProps {
  books: Array<Book>;
}

const BookTable = ({books}: BookTableProps) => {


  const orderBooks = (title : string,qty : number) => {
   console.log(title);
   console.log(qty);
  };
  
  let token = localStorage.getItem('access_token');
  let role = localStorage.getItem('role');
  if(token === null)
  {
    
      const bookElements = books.map(book => (
        <tr className="trData">
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.quantity} left</td>
        </tr>
      ));

      return (
        <table className="bookTable">
          <thead>
            <tr className="trHead">
              <th>Book Title</th>
              <th>Book Author</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {bookElements}
          </tbody>
        </table>
      )
    
  }
  else
  {
    if(role === 'ADMIN')
    {
      const bookElements = books.map(book => (
        <tr className="trData">
          <td className="tdData">{book.title}</td>
          <td className="tdData">{book.author}</td>
          <td className="tdData">{book.quantity} left</td>
          <td className="tdData">
          <MinusIcon />
          <input 
                type="text" className="qtTxt" 
                />
          <AddIcon />
          <button className={book.quantity===0?"btnQtylGrey":"btnQty"} disabled={book.quantity===0?true:false}  type="submit">Order</button>
          </td>
          <td className="tdData">
          <button className="btnEdit"  type="submit">Edit</button>
          <button className={book.quantity===0?"btnDeletelGrey":"btnDelete"} disabled={book.quantity===0?true:false}  type="submit">Delete</button>
          </td>
        </tr>
      ));
    
      return (
        <table className="bookTable">
          <thead>
            <tr className="trHead">
              <th>Book Title</th>
              <th>Book Author</th>
              <th>Availability</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookElements}
          </tbody>
        </table>
      )
    }
    else
    {
        const bookElements = books.map(book => (
          <tr className="trData">
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.quantity} left</td>
            <td>
            <MinusIcon/>
            <input 
                  type="text" className="qtTxt"
                  />
            <AddIcon />
            <button className="btnQty"  type="submit">Order</button>
            </td>
          </tr>
        ));
      
        return (
          <table className="bookTable">
            <thead>
              <tr className="trHead">
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Availability</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {bookElements}
            </tbody>
          </table>
        )
    }
  }
}

export default BookTable;