import Profile from "../profile/Profile";

// import Profile from "../../assets/profile.svg";

const Dashboard = () => {
  return (
    <div className="main-container">
      <aside className="main-aside">
        <Profile />
      </aside>
      <div className="main-main"></div>
    </div>
  );
};

export default Dashboard;
