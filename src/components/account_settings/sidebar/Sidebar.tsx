import React from 'react'
import './sidebar.css'
import image from './ion_school.png'
import { GoPencil } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { LuSchool } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { VscPercentage } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className='head'>
        <img src={image} alt="" /> <span style={{fontWeight: '500'}}>Schools</span>
      </div>
      <div className="sidebar-items">
        <li><span>Ambassadors</span></li>
        <li><span>School two</span></li>
        <li><span>School three</span></li>
        <li><span>School four</span></li>
        <li> <span>School five</span></li>
        <li><span>School six</span></li>
      </div>
      <div className="edit-add">
        <span>Edit</span> 
        <span className='edit-add-icons'><GoPencil /></span>
        <span>/ Add</span>
        <span className='edit-add-icons'><IoMdAdd /></span>
      </div>
      <div className="head">
        <span><VscPercentage size={22}/></span><span>Scores</span>
      </div>
      <div className="sidebar-items">
        <li><LuSchool size={20} opacity={0.7}/><span>All Schools</span></li>
        <li><GoQuestion size={20} opacity={0.7}/><span>Manage Questions</span></li>
      </div>
      <div className="head">
        <span><FiUser size={22}/></span><span>Account</span>
      </div>
      <div className="sidebar-items">
        <li><FaUsers size={20} opacity={0.7}/><span>Manage Users</span></li>
        <li className='active'><IoSettingsOutline size={20} opacity={0.7}/><span>My Account</span></li>
      </div>
    </div>
  )
}

export default Sidebar