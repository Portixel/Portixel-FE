import JoinVerification from "@/app/join/JoinVerfication";
import { FormEvent, Suspense, useState } from "react";

const JoinEmail = () => {
  const [displayVerification, setDisplayVerification] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setDisplayVerification(true);
    }
  };

  return (
    <Suspense fallback={<></>}>
      {displayVerification ? (
        <JoinVerification email={email} />
      ) : (
        <div className="JoinEmail">
          <h4 className="title">Sign up with Gmail account</h4>

          <p className="subTitle">
            New to web3? we have got you. Sign in manually with your email
            account or apply ID
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email.trim()}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password.trim()}
              onChange={(e) => setPassword(e.target.value)}
            />

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
      )}
    </Suspense>
  );
};

export default JoinEmail;
