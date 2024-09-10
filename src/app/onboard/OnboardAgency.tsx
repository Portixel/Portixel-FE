"use client";
import { Industries } from "@/data/Mock";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const OnboardAgency = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/template");
  };

  return (
    <div className="JoinEmail">
      <h4 className="title">Let&apos;s Customize the Best Template</h4>

      <p className="subTitle">
        Enter the name of your organization and a brief about you.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="one">
          <p>Company Name</p>
          <input placeholder="Company name" />
        </label>

        <label>
          <p>Choose Industry</p>
          <select className="skill">
            {Industries.map((industry) => (
              <option key={industry.title} value={industry.title}>
                {industry.title}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="two">
          <p>One Liner About Your Organisation</p>
          <textarea placeholder="Type something"></textarea>
        </label>

        <input type="submit" value="Generate Template" className="submit" />
      </form>
    </div>
  );
};

export default OnboardAgency;
