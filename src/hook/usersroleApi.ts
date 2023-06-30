/**
 * Author: Manjurekha
 * Date: 14th June
 * 
 * This file is a useroleApi.ts file which is used to get the User Role from Api Server with Authorization Header
 *  and store the user role in local storage
 * 
 * 
 */

import axios from "axios";

const UsegetUserRole = (accesstoken: string) => {
  let resp;
  resp = axios.get("http://localhost:3000/library/profile", { headers: { 'Authorization': accesstoken } })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('role', response.data.user.role);
      }
    })
    .catch(error => {
      console.log(error);
    });
}


export { UsegetUserRole };