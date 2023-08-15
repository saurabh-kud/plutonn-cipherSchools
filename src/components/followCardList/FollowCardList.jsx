import "../../css/followcard/followcard.css";

const FollowCardList = ({ data }) => {
  return (
    <li className="follow-list">
      <a className="follow-list-click" href="">
        <img src={data?.profile} alt="" className="follow-list-img list-img" />
        <div className="list-text">
          <span>@ {data?.firstName} </span>
          <h4>{data?.firstName}</h4>
        </div>
      </a>
      <button className="follow-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--material-symbols"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          color="#f45046"
          // style="color: #f45046;"
        >
          <path
            fill="currentColor"
            d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"
          ></path>
        </svg>
        Follow
      </button>
    </li>
  );
};

export default FollowCardList;
