/**
 * Author: Manjurekha
 * Date: 15th June
 * 
 * This file is a PromoteUserForm.tsx component which contains modal pop-up to get a confirmation to Promote/Delete User from Admin
 * Based on the Action={Promote/Delete} performed by Admin in User Page,Admin User will be prompted with confirmation dialog either to Promote User or to Delete User
 * Hooks are used to promote users or to delete users using APIs
 * Confirmation dialog is cancled Admin user will be navigated back to Users Page 
 * 
 */

import { useState } from "react";
import { UsepromoteUsers } from "../hook/promoteusersApi";
import { UsedeleteUsers } from "../hook/deleteusersApi";
import { useNavigate } from "react-router-dom";
interface PromoteUsrProps {
    username: string;
    action: string;
    isOpen: boolean;
}
const PromoteUserForm = ({ username, action, isOpen }: PromoteUsrProps) => {

    const navigate = useNavigate()
    const onProceedClick = (username: string, action: string) => {
        if (action === 'Promote') {
            UsepromoteUsers(username);
            isOpen = false;
            navigate('/Users');

        }
        else {
            UsedeleteUsers(username);
            isOpen = false;
            navigate('/Users');

        }

    };
    const navigateToUser = () => {
        isOpen = false;
        navigate('/Users');
    };

    return (
        <>
            <div className={isOpen ? "modalOpen" : "modalClose"} >
                <div className="modal-content">
                    <div >
                        <p>Change User Settings</p>
                    </div>
                    <div >
                        <p>Are you sure you wish to {action}  user  {username} </p>
                    </div>
                    <div >
                        <button className="btnDelete" onClick={() => onProceedClick(username, action)} type="submit">Proceed</button>
                        <button className="btnDelete" onClick={navigateToUser} type="submit">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PromoteUserForm;