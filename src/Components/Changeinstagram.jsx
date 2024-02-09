import React from "react";
import "./Changeinstagram.css";
import Video1 from "../Images/convert-to-creator.mp4";
import video2 from "../Images/convert-to-business.mp4";
import back from "../Images/back.svg";
import { useNavigate } from "react-router-dom";

function Changeinstagram() {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <div className="backcontainer" onClick={() => navigate(-1)}>
        <img src={back}></img>
      </div>
      <div>
        <div className="how-to-change-header">
          <p>How to change type of Instagram account?</p>
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
          </p>
          <p>
            4.Select Switch to a professional account and click Continue to go
            through the onboarding steps.
          </p>
          <p>
            5.You can choose a category that best describes what you do from the
            options provided and then select Done.
          </p>
          <p>6.Select account type as Creator and then select Next.</p>
          <p>
            7.You have successfully converted your Instagram account to Creator
            type.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginTop: "35px" }}>Watch Video?</p>
          <video src={Video1} width="680" height="650" controls></video>
        </div>
      </div>

      <div>
        <div className="switch-your-personal2">
          <p>B. Switch your Personal account to a Business account:</p>
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
          </p>
          <p>
            4.Select Switch to a professional account and click Continue to go
            through the onboarding steps.
          </p>
          <p>
            5.You can choose a category that best describes what you do from the
            options provided and select Next .
          </p>
          <p>6.Select account type as Creator and then select Next.</p>
          <p>
            7.To successfully connect with Instagram, you need to link your
            account with a Facebook Page. Follow the next steps and log in to
            Facebook.
          </p>
          <p>
            8.Choose a Page from your Pages that you'd like to connect to or
            select Create a New Facebook Page.
          </p>
          <p>
            9.Tap Connect after you've selected a Page or created a new Page.
          </p>
          <p>
            10.You have successfully converted your Instagram account to
            Business type, and linked with a Facebook Page.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginTop: "35px" }}>Watch Video?</p>
          <video src={video2} width="680" height="650" controls></video>
        </div>
      </div>
    </div>
  );
}

export default Changeinstagram;
