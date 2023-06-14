import axios from "axios";
const UsepromoteUsers = (username :string) =>  {   
    const promotuserPayload = { "username": username };    
      let resp; 
      resp = axios.put("http://localhost:3000/admin/users",promotuserPayload,{ headers: {'Authorization':localStorage.getItem('access_token')}})
      .catch(error => {
        console.log(error);
        }) ;    
      
    } 


export { UsepromoteUsers };