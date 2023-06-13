interface PromoteUsrProps{
    username : string;
    action : string;
}
const PromoteUserForm = ({username,action}:PromoteUsrProps) => {

return (
    <>
    <div className="modal">
        <div className="modal-content">
            <div >
                <p>Change User Settings</p>
            </div>
            <div>
            <p>Are you sure you wish to {action}  user  {username} </p>    
            </div>
            <div>
            <button className="btnDelete"   type="submit">Proceed</button>
            <button className="btnDelete"   type="submit">Cancel</button>
            </div>
       </div>
    </div>
    </>
)
}
export default PromoteUserForm;