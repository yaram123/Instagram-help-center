import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../Images/back.svg";
import Video from "../Images/check_page_link.mp4";

function Checkinstafacebook() {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <div className="backcontainer" onClick={() => navigate(-1)}>
        <img src={back}></img>
      </div>
      <div>
        <div className="how-to-change-header">
          <p>How to check if Instagram account is linked to a Facebook Page?</p>
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
            section, select Page.
          </p>
          <p>4.Here,</p>
          <div>
            <p>
              a. If you are asked to Connect to a Facebook Page, it means that
              your Instagram account is NOT linked to a Facebook page.{" "}
              <span
                style={{ color: "lightskyblue" }}
                onClick={() => navigate("/")}
              >
                See how to link an Instagram account to a Facebook page ↗
              </span>
            </p>
            <p>
              b.If you are asked to Manage Connection, it means that your
              Instagram account is linked to a Facebook page.
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginTop: "35px" }}>Watch Video?</p>
          <video src={Video} width="680" height="650" controls></video>
        </div>
      </div>
    </div>
  );
}

export default Checkinstafacebook;
