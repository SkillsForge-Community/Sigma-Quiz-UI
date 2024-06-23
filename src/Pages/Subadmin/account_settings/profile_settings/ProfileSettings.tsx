import './profileSettings.css'
import { FaUserCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useAppSelector } from '../../../../app/Hooks';

const ProfileSettings = () => {
  const user=useAppSelector(state=>state.auth.user)

  return (
    <div className='profile-settings'>

      <div className="profile-img">
        <FaUserCircle size={80} color='#9a9a9a'/>
        <div className="profile-img-text">
          <IoIosAdd size={28}/><span>Add picture</span>
        </div>
      </div>

      <span className="profile-name"  style={{marginTop: '10px'}}>{user?.first_name}</span>

      <div className="profile-form">
        <div className="field">
          <label htmlFor="">First Name</label>
          <input type="text" defaultValue={user?.first_name}/>
        </div>
        <div className="field">
          <label htmlFor="">Last Name</label>
          <input type="text" defaultValue={user?.last_name}/>
        </div>
        <div className="field">
          <label htmlFor="">Email Address</label>
          <input type="text" defaultValue={user?.email}/>
        </div>
        <button className='update-profile'>Update Profile</button>
      </div>
    </div>
  )
}

export default ProfileSettings