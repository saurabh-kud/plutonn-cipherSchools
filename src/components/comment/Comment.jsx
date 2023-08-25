import React from "react";
import "../../css/comment/comment.css";
const Comment = ({ data }) => {
  console.log(data.name);
  const actualData = new Date(data?.createdAt);

  console.log(actualData);

  // Current time
  const currentTime = new Date();

  // Given timestamp
  const givenTimestamp = new Date(data?.createdAt);

  // Calculate the time difference in milliseconds
  const timeDifference = givenTimestamp - currentTime;

  // Calculate days, hours, and minutes
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  console.log(
    `${daysLeft} days, ${hoursLeft} hours, and ${minutesLeft} minutes left.`
  );

  const daystr = `${Math.abs(daysLeft)} day ago`;
  const hoursStr = `${hoursLeft} hours ago`;

  return (
    <div>
      {data?.replyId ? (
        <div className="main-comment  " style={{ marginLeft: "20px" }}>
          <div className="comment-img">
            <img src={data?.profileLink} alt="" />
          </div>
          <div className="comment-box">
            <div className="comment-heading">
              <h2>@ {data?.name}</h2>
              <h3>{daysLeft ? daystr : hoursStr}</h3>
            </div>
            <div className="main-comment-section">
              <span>{data?.text}</span>
            </div>
            <div className="comment-like">
              <button>like</button>
              <button>reply</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-comment">
          <div className="comment-img">
            <img src={data?.profileLink} alt="" />
          </div>
          <div className="comment-box">
            <div className="comment-heading">
              <h2>@ {data?.name}</h2>
              <h3>{daysLeft ? daystr : hoursStr}</h3>
            </div>
            <div className="main-comment-section">
              <span>{data?.text}</span>
            </div>
            <div className="comment-like">
              <button>like</button>
              <button>reply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
