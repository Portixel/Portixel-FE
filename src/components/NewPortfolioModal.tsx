"use client";
import TabState from "@/components/TabState";
import { Industries, Skills } from "@/data/Mock";
import { FormEvent, useState } from "react";

const NewPortfolioModal = () => {
  const [tab, setTab] = useState(Tabs[0]?.title);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="modalParent">
      <div className="NewPortfolioModal">
        <div className="top">
          <h4 className="title">Generate Portfolio Template</h4>

          <button>
            <img alt="" src="/icon/close.svg" width={24} height={24} />
          </button>
        </div>

        <TabState Tabs={Tabs} selected={tab} setSelected={setTab} />

        {tab == "Individual" ? (
          <form onSubmit={handleSubmit}>
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default NewPortfolioModal;

const Tabs = [
  {
    title: "Individual",
  },
  {
    title: "Agency",
  },
];
