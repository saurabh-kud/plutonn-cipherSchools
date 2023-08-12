import "../../css/profile/profile.css";
import prof from "../../assets/profile.svg";
import proficon from "../../assets/side-logo.png";
import loginicon from "../../assets/login.svg";

const Profile = () => {
  return (
    <section className="profile-card">
      <div className="profile-img">
        <img className="prof" src={prof} alt="" />
        <img
          className="proficon proficon-temp proficon-t"
          src={proficon}
          alt=""
        />
      </div>
      <div className="line"></div>
      <div className="profile-status">
        <div>
          <h2>You haven't logged in</h2>
          <h3>Take your username now</h3>
        </div>
      </div>
      <p className="profile-discription">
        Click the login button and make yourself a part of this wonderful
        community.
      </p>
      <button className="profile-btn btn">
        <img src={loginicon} alt="" />
        login
      </button>
    </section>
  );
};

export default Profile;
