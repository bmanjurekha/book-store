/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a BookTable component which is used to display Table of books with Book Title, Author, Quantity.
 * Using user role from local storage other operations are displayed, like Order Book for User/Admin User,  Edit/ Delete books for Admin User
 *  
 * 
 * 
 */
import { Book } from "../model/book"
import { ReactComponent as AddIcon } from '../assets/216373_plus_icon.svg';
import { ReactComponent as MinusIcon } from '../assets/216340_minus_icon.svg';
interface BookTableProps {
  books: Array<Book>;
}

const BookTable = ({books}: BookTableProps) => {


  const orderBooks = (title : string,qty : number) => {
   console.log(title);
   console.log(qty);
  };
  
  
  let role = localStorage.getItem('role');
  //Guest User
  if(role === null)
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
  //Admin User
  else if(role === 'ADMIN')
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
  //User
  else if(role === 'USER')
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
    else
    {
      return (
        <></>
      )
    }
  
}

export default BookTable;