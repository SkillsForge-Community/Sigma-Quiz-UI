import React from 'react'
import './profileSettings.css'
import { FaUserCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

const ProfileSettings = () => {
  return (
    <div className='profile-settings'>

      <div className="profile-img">
        <FaUserCircle size={80} color='#9a9a9a'/>
        <div className="profile-img-text">
          <IoIosAdd size={28}/><span>Add picture</span>
        </div>
      </div>

      <span className="profile-name">Yande Stephens</span>

      <div className="profile-form">
        <div className="field">
          <label htmlFor="">First Name</label>
          <input type="text" defaultValue='yande'/>
        </div>
        <div className="field">
          <label htmlFor="">Last Name</label>
          <input type="text" defaultValue='yande'/>
        </div>
        <div className="field">
          <label htmlFor="">Email Address</label>
          <input type="text" defaultValue='yandestephens@gmail.com'/>
        </div>
        <button className='update-profile'>Update Profile</button>
      </div>
    </div>
  )
}

export default ProfileSettings