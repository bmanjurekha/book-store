import axios from "axios";
import { useNavigate } from 'react-router-dom';
const UsepromotUsers = (username :string) =>  {   
    const promotuserPayload = { "username": username };
    const navigate = useNavigate();
      let resp; 
      resp = axios.put("http://localhost:3000/admin/users",promotuserPayload,{ headers: {'Authorization':localStorage.getItem('access_token')}})
      .then(response => {
        if(response.status === 200){
            navigate('/Users');
          }
      })
      .catch(error => {
        console.log(error);
        }) ;    
      
    } 


export { UsepromotUsers };