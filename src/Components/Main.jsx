import React from "react";
import "./Main.css";
import insta from "../Images/instaa.svg";
import forward from "../Images/forward.svg";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleclick = (index) => {
    console.log(index);
    switch (index) {
      case 0:
        navigate("/check-type-of-instagram-account");
        break;
      case 1:
        navigate("/change-type-of-instagram-account");
        break;
      case 2:
        navigate("/check-if-instagram-account-is-linked-to-facebook-page");
        break;
      case 3:
        navigate("/link-instagram-account-to-facebook-page");
        break;
    }
  };

  const howto = [
    {
      index: 0,
      title: "check type of Instagram account?",
    },
    {
      index: 1,
      title: "change type of Instagram account?",
    },
    {
      index: 2,
      title: "check if Instagram account is linked to a Facebook Page?",
    },
    { index: 3, title: "link Instagram account to a Facebook Page?" },
  ];
  return (
    <div className="mainpage">
      <div className="heading">
        <img src={insta}></img>
        <p style={{ fontWeight: "bold", fontSize: "medium" }}>
          Instagram Login Help Center
        </p>
      </div>
      <div className="input">
        <input type="text" placeholder="How can help you?"></input>
      </div>
      <div>
        <p
          style={{ marginTop: "30px", fontWeight: "bold", fontSize: "medium" }}
        >
          How to
        </p>
        {howto?.map((data) => (
          <div
            className="howto-container"
            onClick={() => handleclick(data?.index)}
          >
            <p>{data?.title}</p>
            <img
              src={forward}
              style={{
                position: "absolute",
                marginLeft: "680px",
                marginTop: "-30px",
              }}
            ></img>
          </div>
        ))}
      </div>
      <div>
        <p
          style={{ marginTop: "30px", fontWeight: "bold", fontSize: "medium" }}
        >
          Why is this required for an Instagram login?
        </p>
        <div>
          <p>
            Instagram needs you to have the following for successfully
            connecting your account
          </p>
          <p>
            1. Your Instagram account must be a Creator or Business account.
          </p>
          <p>2.Your Instagram account must be connected to a Facebook Page.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
