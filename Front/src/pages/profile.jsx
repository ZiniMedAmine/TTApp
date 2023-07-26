import "./Profile.css";
import Navbar from "../components/navbar/Navb";
import { useEffect } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileModal from "../components/profile/ProfileModal";
import UserIcon from "../img/user.png";

function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });
  if (localStorage.getItem("isAdmin") === "true") {
    return (
      <div className="profile-container">
        <Navbar active="profile" />
        <div className="profile-container ">
          <img src={UserIcon} alt="UserIcon" className="UserIcon  mb-4" />
          <ProfileCard />
          <ProfileModal />
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile-container">
        <Navbar active="profile" />
        <div className="profile-container ">
          <img src={UserIcon} alt="UserIcon" className="UserIcon  mb-4" />
          <ProfileCard />
        </div>
      </div>
    );
  }
}
export default Profile;
