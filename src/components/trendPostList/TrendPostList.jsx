import "../../css/tredingList/trendingList.css";

const TrendPostList = () => {
  return (
    <li className="treding-list">
      <div className="list-content">
        <div className="list-stats">
          <a href="/">
            <p className="list-writer">.anubhavmishraaa</p>
          </a>
          <p className="list-time">.6 days ago</p>
        </div>
        <a href="/">
          <div className="trendPost">
            <p className="trendingcontent">
              Reflecting on the journey of 2020, a year of challenges and
              growth. Memories ... captured in moments, lessons... embraced
              through experiences. Here's to looking back with gratitude and
              stepping forward with resilience. Climbing The Top ⛰️ 📌 George
              Everest, Mussoorie #ME #throwback20 #dehradun
            </p>
          </div>
        </a>
      </div>
      <a href="">
        <span>
          <img
            alt="post_image"
            loading="lazy"
            src="https://d3gmywgj71m21w.cloudfront.net/83ca33b6236502966b16a06d7f08a90e.jpg"
            width="100%"
            height="auto"
          />
        </span>
      </a>
    </li>
  );
};

export default TrendPostList;
