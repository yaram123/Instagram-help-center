import React from "react";
import { useNavigate } from "react-router-dom";
import Video from "../Images/link-fb-page.mp4";
import back from "../Images/back.svg";

function Linkinstagram() {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <div className="backcontainer" onClick={() => navigate(-1)}>
        <img src={back}></img>
      </div>
      <div>
        <div className="how-to-change-header">
          <p>How to link Instagram account to a Facebook Page?</p>
        </div>
        <div>
          <p style={{ color: "lightgrey" }}>
            Note: You need a Creator or Business account to link a Facebook
            Page.
          </p>
        </div>
        <div className="switch-your-personal">
          <p>A. Switch your Personal account to a Creator account:</p>
        </div>
        <div className="switch-your-personal-container">
          <p>1.Go to your Instagram profile on the app.</p>
          <p>2.Click on Edit Profile.</p>
          <p>
            3.Under the Profile Information / Public Business Information
            section, select Connect or Create under the Page option.
          </p>
          <p>4.Follow the next steps and log in to Facebook.</p>
          <p>
            5.Choose a Page from your Pages that you'd like to connect to or
            select Create a New Facebook Page.
          </p>
          <p>
            6.Tap Connect after you've selected a Page or created a new Page.
          </p>
          <p>
            7.You have successfully linked your Instagram account to a Facebook
            page.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginTop: "35px" }}>Watch Video?</p>
          <video src={Video} width="680" height="650" controls></video>
        </div>
      </div>
    </div>
  );
}

export default Linkinstagram;
