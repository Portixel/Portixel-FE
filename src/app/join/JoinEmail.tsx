"use client";

import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const JoinEmail = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="JoinEmail">
      <h4 className="title">Sign up with Gmail account</h4>

      <p className="subTitle">
        New to web3? we have got you. Sign in manually with your email account
        or apply ID
      </p>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <p className="or">
          <span></span>
          Or
          <span></span>
        </p>

        <button className="signWith">
          <img
            alt=""
            src="/icon/google.svg"
            width={20}
            height={20}
            className="icon"
          />

          <p>Continue with Google</p>
        </button>

        <button className="signWith">
          <img
            alt=""
            src="/icon/apple.svg"
            width={20}
            height={20}
            className="icon"
          />

          <p>Continue with Apple</p>
        </button>

        <input type="submit" value="Sign up" className="submit" />
      </form>
    </div>
  );
};

export default JoinEmail;
