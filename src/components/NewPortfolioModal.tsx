import TabState from "@/components/TabState";
import { Industries, Skills } from "@/data/Mock";
import { IRootStore } from "@/redux/store";
import { SET_GENERATE_MODAL_STATE } from "@/redux/util/utilSlice";
import { FormEvent, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NewPortfolioModal = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(Tabs[0]?.title);

  const { generateModalIsOpen } = useSelector(
    (state: IRootStore) => state?.util
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const closeModal = () => {
    dispatch(SET_GENERATE_MODAL_STATE({ generateModalIsOpen: false }));
  };

  const blockPropagation = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="modalParent"
      onClick={closeModal}
      style={{ display: generateModalIsOpen ? "flex" : "none" }}
    >
      <div className="NewPortfolioModal" onClick={blockPropagation}>
        <div className="top">
          <h4 className="title">Generate Portfolio Template</h4>

          <button onClick={closeModal}>
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
