import Navbar from "../components/Navb";
import { useEffect } from "react";
import ProfileTable from "../components/ProfileTable";
import Modal from "../components/Modall";
import UserIcon from "../img/user.png";


function Profile() {


  useEffect(() => {
    document.title = "Profile";
  });
  if (localStorage.getItem("isAdmin")==="true") {
      return(
    <div className="profile-container">
      <Navbar active="profile" />
      <div className="profile-container ">
        <img src={UserIcon} alt="UserIcon" className="UserIcon  mb-4" />
        <ProfileTable />
        <Modal />
      </div>
    </div>
      )
    
  }else{
    return(
      <div className="profile-container">
      <Navbar active="profile" />
      <div className="profile-container ">
        <img src={UserIcon} alt="UserIcon" className="UserIcon  mb-4" />
        <ProfileTable />
      </div>
    </div>
    )
  }

}
export default Profile;
