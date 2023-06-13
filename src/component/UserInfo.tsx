import React from 'react';
const UserInfo = () => {
    const onSignOutClick = () => {   
        localStorage.removeItem('username');
        localStorage.removeItem('access_token');
        localStorage.removeItem('isAuthUser');     
        localStorage.removeItem('role');  
      };
    
    
    let uName = localStorage.getItem('username');
    let role = localStorage.getItem('role');
    if(uName === null)
    {
    return (
        <>
          <label className='lblUsrname'>Browsing as guestuser</label>       
          <button  className='btnSignIn'>Sign In</button>
        </>
    )
    }
    else
    {
        return (
            <>
              <label className='lblUsrname'>Browsing as {role} - {uName}</label>
              <button onClick={onSignOutClick} className='btnSignIn'>Sign Out</button>
            </>
        )
    }
}
export default UserInfo;