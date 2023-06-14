import { useState } from "react";
import { UsepromoteUsers } from "../hook/promoteusersApi";
import { UsedeleteUsers } from "../hook/deleteusersApi";
import {  useNavigate } from "react-router-dom";
interface PromoteUsrProps{
    username : string;
    action : string;
}
const PromoteUserForm = ({username,action}:PromoteUsrProps) => {

    const [isOpen, setIsOpen] = useState(true);
    
    const navigate = useNavigate()
    const onProceedClick = (username:string,action:string) => {
        if(action==='Promote'){
            UsepromoteUsers(username);
            navigate('/Users');
            setIsOpen(false);
        }
        else {
            UsedeleteUsers(username);
            navigate('/Users');
            setIsOpen(false);
        }
        
       };
    const navigateToUser = () => {
        setIsOpen(false);
        navigate('/Users');
       };
    
return (
    <>
    <div className={isOpen?"modal":"modalClose"} >
        <div className={isOpen?"modal-content":"modal-content-close"}>
            <div className={isOpen?"modal-p":"modal-p-close"}>
                <p>Change User Settings</p>
            </div>
            <div className={isOpen?"modal-p2":"modal-p2-close"}>
            <p>Are you sure you wish to {action}  user  {username} </p>    
            </div>
            <div className={isOpen?"modal-btn":"modal-btn-close"}>
            <button className="btnDelete"  onClick={() => onProceedClick(username,action)}  type="submit">Proceed</button>
            <button className="btnDelete"  onClick={navigateToUser}  type="submit">Cancel</button>
            </div>
       </div>
    </div>
    </>
    )
}
export default PromoteUserForm;