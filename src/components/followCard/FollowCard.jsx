import "../../css/followcard/followcard.css";
import FollowCardList from "../followCardList/FollowCardList";
import { useEffect, useState } from "react";
import axios from "axios";

const FollowCard = () => {
  const [tredingData, setTrendingData] = useState([]);

  useEffect(() => {
    fetchTrendingUser();
  }, []);

  const fetchTrendingUser = async () => {
    const data = await axios.get(
      ` https://www.plutonn.com/api/user/get-trending-users`
    );
    // const datajson = await data.json();

    
    setTrendingData(data?.data);
  };

  return (
    <section className="follow-card">
      {/* {props.data?.map((d, index) => {
        return <FollowCardList data={d} key={index} />;
      })} */}

      {tredingData.length > 0 ? (
        tredingData?.map((d, index) => {
          return <FollowCardList data={d} key={index} />;
        })
      ) : (
        <h1>Loading......</h1>
      )}

      {/* <FollowCardList />
      <FollowCardList />
      <FollowCardList />
      <FollowCardList />
      <FollowCardList />
      <FollowCardList />
      <FollowCardList />
      <FollowCardList />
      <FollowCardList /> */}
    </section>
  );
};

export default FollowCard;
