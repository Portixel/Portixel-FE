"use client";
import { PreName, Skills } from "@/data/Mock";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const OnboardIndividual = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/template");
  };

  return (
    <div className="JoinEmail">
      <h4 className="title">Let&apos;s Customize the Best Template</h4>

      <p className="subTitle">
        Tell us your name, choose a skill and a brief about yourself
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="one">
          <p>Your Name</p>
          <div className="inputGroup">
            <select>
              {PreName.map((pre) => (
                <option key={pre.title} value={pre.title}>
                  {pre.title}
                </option>
              ))}
            </select>
            <span className="line"></span>
            <input type="text" placeholder="Your name" id="one" />
          </div>
        </label>

        <label>
          <p>Select Skill</p>
          <select className="skill">
            {Skills.map((skill) => (
              <option key={skill.title} value={skill.title}>
                {skill.title}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="two">
          <p>One Liner About Yourself</p>
          <textarea placeholder="Type something"></textarea>
        </label>

        <input type="submit" value="Generate Template" className="submit" />
      </form>
    </div>
  );
};

export default OnboardIndividual;
