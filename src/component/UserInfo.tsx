/**
 * Author: Manjurekha
 * Date: 15th June
 * 
 * This file is a User Info component , which is used to display Profile information of the user like Role, Username and 
 * this component is used on the right side of the Header
 * If user signsout , all the localstorage data would be removed.
 * 
 */

import React from 'react';
const UserInfo = () => {
  const onSignOutClick = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAuthUser');
    localStorage.removeItem('role');
  };
  const onSigninClick = () => {
    //Redirect to Login Page
  };

  let uName = localStorage.getItem('username');
  let role = localStorage.getItem('role');
  if (uName === null) {
    return (
      <>
        <label className='lblUsrname'>Browsing as guestuser</label>
        <button onClick={onSigninClick} className='btnSignIn'>Sign In</button>
      </>
    )
  }
  else {
    return (
      <>
        <label className='lblUsrname'>Browsing as {role} - {uName}</label>
        <button onClick={onSignOutClick} className='btnSignIn'>Sign Out</button>
      </>
    )
  }
}
export default UserInfo;