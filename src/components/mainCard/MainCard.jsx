import "../../css/mainCard/mainCard.css";
import FollowCardList from "../followCardList/FollowCardList";

const MainCard = () => {
  return (
    <div className="main-card">
      <FollowCardList />
      <div className="main-card-content">
        <div className="card-main-text">
          <p>
            Git Merge vs Git Rebase When we "merge changes" from one Git branch
            to another, we can use either ‘git merge’ or ‘git rebase’. The
            diagram below shows how these two commands work.
          </p>
        </div>
        <a href="" className="read_more">
          Read More
        </a>
        <div>
          <div className="main-card-img-wrapper">
            <img
              src="https://d3gmywgj71m21w.cloudfront.net/f81efd0066a3ee6a25f37b4ad60ea4db.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="main-card-action">
        <div className="card-comment">
          <button className="card-cmt-btn card-like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--ph"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M132 24A100.11 100.11 0 0 0 32 124v84.33A15.69 15.69 0 0 0 47.67 224H132a100 100 0 0 0 0-200Zm0 184H48v-84a84 84 0 1 1 84 84Z"
              ></path>
            </svg>
            <span>1</span>
          </button>
        </div>
        <button className="card-like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--mdi"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"
            ></path>
          </svg>
          <span>5</span>
        </button>
        <button className="card-share card-like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08Z"
            ></path>
          </svg>
        </button>
        <a href="/" className="card-action-right">
          <div className="user-intraction">
            <img
              height={26}
              width={26}
              className="user-intraction-img"
              src="https://d3gmywgj71m21w.cloudfront.net/e5f15e56c16bc817679b91a7323bf6de.jpeg"
              alt=""
            />
            <img
              height={26}
              width={26}
              className="user-intraction-img"
              src="https://d3gmywgj71m21w.cloudfront.net/e5f15e56c16bc817679b91a7323bf6de.jpeg"
              alt=""
            />
            <svg
              width="26"
              height="26"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              class="avatar_loader__QsUte "
              aria-label="rotating-triangle-loading"
              data-testid="rotating-triangle-svg"
              aria-busy="true"
              role="status"
            >
              <g transform="translate(50,42)">
                <g transform="scale(0.8)">
                  <g transform="translate(-50,-50)">
                    <polygon
                      ng-attr-fill="{{config.c1}}"
                      points="72.5,50 50,11 27.5,50 50,50"
                      fill="var(--primary)"
                      transform="rotate(186 50 38.5)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 50 38.5;360 50 38.5"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </polygon>
                    <polygon
                      ng-attr-fill="{{config.c2}}"
                      points="5,89 50,89 27.5,50"
                      fill="var(--blue)"
                      transform="rotate(186 27.5 77.5)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 27.5 77.5;360 27.5 77.5"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </polygon>
                    <polygon
                      ng-attr-fill="{{config.c3}}"
                      points="72.5,50 50,89 95,89"
                      fill="var(--slateblue)"
                      transform="rotate(186 72.2417 77.5)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 72.5 77.5;360 72 77.5"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </polygon>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              width="26"
              height="26"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              class="avatar_loader__QsUte "
              aria-label="rotating-triangle-loading"
              data-testid="rotating-triangle-svg"
              aria-busy="true"
              role="status"
            >
              <g transform="translate(50,42)">
                <g transform="scale(0.8)">
                  <g transform="translate(-50,-50)">
                    <polygon
                      ng-attr-fill="{{config.c1}}"
                      points="72.5,50 50,11 27.5,50 50,50"
                      fill="var(--primary)"
                      transform="rotate(186 50 38.5)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 50 38.5;360 50 38.5"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </polygon>
                    <polygon
                      ng-attr-fill="{{config.c2}}"
                      points="5,89 50,89 27.5,50"
                      fill="var(--blue)"
                      transform="rotate(186 27.5 77.5)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 27.5 77.5;360 27.5 77.5"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </polygon>
                    <polygon
                      ng-attr-fill="{{config.c3}}"
                      points="72.5,50 50,89 95,89"
                      fill="var(--slateblue)"
                      transform="rotate(186 72.2417 77.5)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 72.5 77.5;360 72 77.5"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </polygon>
                  </g>
                </g>
              </g>
            </svg>
            <span className="intraction-text">+5</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MainCard;
