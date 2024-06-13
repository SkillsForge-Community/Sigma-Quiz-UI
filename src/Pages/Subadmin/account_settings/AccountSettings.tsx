import React from 'react'
import './accountSettings.css'
import { Outlet } from 'react-router-dom'
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';

const AccountSettings = () => {

  const naviagte = useNavigate();
  const location = useLocation();

  return (
    <div className='account-setting-container'>
        <Outlet />
        <div className="right-section">
            <button className={(location.pathname === '/subadmin/account-settings/profile-settings' || location.pathname === '/subadmin/account-settings') ? 'active' : ''}  onClick={() => naviagte('/subadmin/account-settings/profile-settings')}><FiUser size={20}/> Profile Settings <IoIosArrowForward size={20}/></button>
            <button className={(location.pathname === '/subadmin/account-settings/password-settings') ? 'active' : ''} onClick={() => naviagte('/subadmin/account-settings/password-settings')}><RiLockPasswordLine size={20} /> Password Settings <IoIosArrowForward size={20}/></button>
            <button><MdLogout size={20} /> logout <IoIosArrowForward size={20}/></button>
        </div>
    </div>
  )
}

export default AccountSettings