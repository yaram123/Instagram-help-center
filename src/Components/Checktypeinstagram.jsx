import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../Images/back.svg";
import Video from "../Images/check-account-type.mp4";

function Checktypeinstagram() {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <div className="backcontainer" onClick={() => navigate(-1)}>
        <img src={back}></img>
      </div>
      <div>
        <div className="how-to-change-header">
          <p>How to check type of Instagram account?</p>
        </div>
        <div className="switch-your-personal">
          <p>A. Switch your Personal account to a Creator account:</p>
        </div>
        <div className="switch-your-personal-container">
          <p>
            1.Go to your profile page on Instagram and select on the top right
            corner and select .
          </p>
          <p>2.Scroll all the way down, and select Account type and tools</p>
          <p>
            3.If you see the Switch to professional account option, that means
            your account is of personal type.
            <span
              style={{ color: "skyblue" }}
              onClick={() => navigate("/change-type-of-instagram-account")}
            >
              {" "}
              See how to change type of Instagram account?↗
            </span>
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

export default Checktypeinstagram;
