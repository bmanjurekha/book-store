/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a deleteuserApi.ts file which is used to delete users based on their username. 
 * 
 * 
 * 
 */
import axios from "axios";
const UsedeleteUsers = (username: string) => {
  const deleteuserPayload = { "username": username };
  let resp;
  resp = axios.delete("http://localhost:3000/admin/users",
    {
      headers: { 'Authorization': localStorage.getItem('access_token') },
      data: { "username": username }
    })
    .catch(error => {
      console.log(error);
    });

}


export { UsedeleteUsers };