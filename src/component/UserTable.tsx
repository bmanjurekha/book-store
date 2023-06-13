import { useState } from "react";
import { User } from "../model/users"
import PromoteUserForm from "./PromoteUserForm";
interface UserTableProps {
  users: Array<User>;
}


const UserTable = ({users}: UserTableProps) => {
  const[username,setUsername] = useState('');
  const [isPromote, setIsPromote] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const promoteUser = (username : string) => {
    setUsername(username);
    setIsPromote(true);
    setIsDelete(false);
   };
   const deleteUser = (username : string) => {
    setUsername(username);
    setIsPromote(false);
    setIsDelete(true);
   };
  const userElements = users.map(user => (
    <tr className="trData">
      <td>{user.username}</td>
      <td>{user.role}</td>
      <td>{user.purchases?.reduce((sum, current) => sum + current.quantity, 0)}</td>
      <td>
      <button className={user.role==='ADMIN'?"btnPromotelGrey":"btnPromote"} onClick={() => promoteUser(user.username)} disabled={user.role==='ADMIN'?true:false}  type="submit">Promote</button>
      {isPromote && <PromoteUserForm action="Promote" username={username} />}
      <button className={user.role==='ADMIN'?"btnDeletelGrey":"btnDelete"} onClick={() => deleteUser(user.username)} type="submit">Delete</button>
      {isDelete && <PromoteUserForm action="Delete" username={username} />}
      </td>
    </tr>
  ));

  return (
    <table className="bookTable">
      <thead>
        <tr className="trHead">
          <th>Username</th>
          <th>Role</th>
          <th>Purchases</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userElements}
      </tbody>
    </table>
  )
}
  

export default UserTable;