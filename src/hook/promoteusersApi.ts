/**
 * Author: Manjurekha
 * Date: 12th June
 * 
 * This file is a promoteusersApi.ts file which is used to promote users based on their username. 
 * 
 * 
 * 
 */
import axios from "axios";
const usepromoteUsers = (username: string) => {
  const promotuserPayload = { "username": username };
  let resp;
  resp = axios.put("http://localhost:3000/admin/users", promotuserPayload, { headers: { 'Authorization': localStorage.getItem('access_token') } })
    .catch(error => {
      console.log(error);
    });

}


export { usepromoteUsers };