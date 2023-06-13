import {  useState } from "react"
import axios from "axios";
import { User } from "../model/users"

const UsegetUsers = (query :string) =>  {   
    const [users, setUsers] = useState([] as Array<User>); 
      let resp; 
      resp = axios.get("http://localhost:3000/admin/users",{ headers: {'Authorization':localStorage.getItem('access_token')}})
      .then(response => {
        if(response.status === 200){
            setUsers(response.data.users);
          }
      })
      .catch(error => {
        console.log(error);
        }) ;    
        return {users};
    } 


export { UsegetUsers };