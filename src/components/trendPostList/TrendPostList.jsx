import "../../css/tredingList/trendingList.css";

const TrendPostList = ({ data }) => {
  return (
    <li className="treding-list">
      <div className="list-content">
        <div className="list-stats">
          <a href="/">
            <p className="list-writer">.{data?.user?.username}</p>
          </a>
          <p className="list-time">.6 days ago</p>
        </div>
        <a href="/">
          <div className="trendPost">
            <p className="trendingcontent">{data?.post_text}</p>
          </div>
        </a>
      </div>
      <a href="">
        <span>
          {data.image_links.length > 0 ? (
            <img
              alt="post_image"
              loading="lazy"
              src={data.image_links[0]}
              width="100%"
              height="auto"
            />
          ) : null}
        </span>
      </a>
    </li>
  );
};

export default TrendPostList;
