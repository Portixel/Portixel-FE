import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  Suspense,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const JoinVerification = ({ email }: { email: string }) => {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState<string[]>(new Array(6).fill(""));
  const [completed, setCompleted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNaN(Number(e.target.value))) {
      return;
    }

    const newInput = [...otpValue];
    newInput[index] = e.target.value.slice(0, 1);
    setOtpValue(newInput);
    const nextTarget = document.getElementsByName(`otpInput${index + 1}`)[0];

    if (nextTarget) {
      nextTarget.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const prevTarget = document.getElementsByName(`otpInput${index - 1}`)[0];
    const nextTarget = document.getElementsByName(`otpInput${index + 1}`)[0];

    if (e.key == "Backspace") {
      const newInput = [...otpValue];

      if (newInput[index]) {
        newInput[index] = "";
      }

      setOtpValue(newInput);
    } else if (e.key === "ArrowLeft" && prevTarget) {
      prevTarget.focus();
    } else if (e.key === "ArrowRight" && nextTarget) {
      nextTarget.focus();
    }
  };

  useEffect(() => {
    if (otpValue.filter((v) => v.trim() !== "").length == otpValue.length) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }

    // console.log(otpValue);
  }, [otpValue]);

  return (
    <Suspense fallback={<></>}>
      <div className="JoinVerification">
        <h4 className="title">Email Verification</h4>

        <p className="subTitle">
          An email with a verification code was just sent to {email || "you"}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp">
            {otpValue.map((value, index) => (
              <input
                key={index}
                type="text"
                className="otpInput"
                name={`otpInput${index}`}
                value={value.trim()}
                onChange={(e) => handleOnChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          <input
            type="submit"
            value="Next"
            className={`submit ${!completed && "notCompleted"}`}
            disabled={!completed}
          />
        </form>

        <div className="bottom">
          <p>Didn't receive a code?</p>
          <button>Resend</button>
        </div>
      </div>
    </Suspense>
  );
};

export default JoinVerification;
