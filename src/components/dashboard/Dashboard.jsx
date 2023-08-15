import FollowCard from "../followCard/FollowCard";
import NavComp from "../navComp/NavComp";
import Profile from "../profile/Profile";
import "../../css/dashboard/dashboard.css";
import TrendPostList from "../trendPostList/TrendPostList";
import MainCard from "../mainCard/MainCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [postData, setPostData] = useState([]);
  const [treandingPost, setTrendingPost] = useState([]);

  useEffect(() => {
    getTreandingPost();
    getAllPost();
  }, []);

  const getAllPost = async () => {
    const data = await axios.get(
      `https://corsproxy.io/?https://www.plutonn.com/api/post/getposts?page=1&limit=15`
    );
    // const datajson = await data.json();

    setPostData(data?.data?.data);
  };

  const getTreandingPost = async () => {
    const data = await axios.get(
      ` https://corsproxy.io/?https://www.plutonn.com/api/post/get-trending-posts?page=1&limit=10`
    );
    // const datajson = await data.json();

    setTrendingPost(data?.data?.data);
  };

  return (
    <div className="main-container">
      {/* ------------------ - -  - Left side - - - ----- */}

      <aside className="main-aside">
        <Profile />
        <NavComp />
        <FollowCard />
      </aside>

      <section className="main-main">
        {/* ------------------ - -  - Middle - - - ----- */}

        <article className="main-wrapper">
          <div className="main-header">
            <ul className="main-header-wrapper">
              <a className="home_listItem home_active" href="/">
                Posts
              </a>
              <a className="home_listItem " href="/opportunities">
                Opportunities
              </a>
            </ul>
          </div>
          <article className="infinitescroll-container">
            {postData.length > 0 ? (
              postData?.map((d, index) => {
                return <MainCard data={d} key={index} />;
              })
            ) : (
              <h1>Loading......</h1>
            )}
            {/* <MainCard />
            <MainCard />
            <MainCard />
            <MainCard /> */}
          </article>
        </article>

        {/* ------------------ - -  - Right side - - - ----- */}
        <article className="main-left-bar">
          <div className="treding-post">
            <div className="treding-post-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="trending_cardIcon__zmz6C iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h8v-64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v64h16V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v112h16V40a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v160h8a8 8 0 0 1 8 8Z"
                ></path>
              </svg>
              <h2>Trending Posts</h2>
            </div>

            {treandingPost.length > 0 ? (
              treandingPost?.map((d, index) => {
                return <TrendPostList data={d} key={index} />;
              })
            ) : (
              <h1>Loading.....</h1>
            )}
            {/* <TrendPostList />
            <TrendPostList />
            <TrendPostList />
            <TrendPostList />
            <TrendPostList />
            <TrendPostList /> */}
          </div>
          <div className="treding-course">
            <div className="treding-post-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="trending_cardIcon__zmz6C iconify iconify--ph"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h8v-64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v64h16V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v112h16V40a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v160h8a8 8 0 0 1 8 8Z"
                ></path>
              </svg>
              <h2>Trending Course</h2>
            </div>
            <ul className="trending-list-wrapper"></ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
