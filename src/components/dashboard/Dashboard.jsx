import FollowCard from "../followCard/FollowCard";
import NavComp from "../navComp/NavComp";
import Profile from "../profile/Profile";

// import Profile from "../../assets/profile.svg";

const Dashboard = () => {
  return (
    <div className="main-container">
      <aside className="main-aside">
        <Profile />
        <NavComp />
        <FollowCard />
      </aside>
      <div className="main-main"></div>
    </div>
  );
};

export default Dashboard;
