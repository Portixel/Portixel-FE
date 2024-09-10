import { memo } from "react";

interface ITabProp<T = { title: string }[]> {
  Tabs: T;
  selected: string;
  setSelected: (data: string) => void;
}

const TabState = ({ Tabs, selected, setSelected }: ITabProp) => {
  return (
    <div className="Tab">
      {Tabs.map((tab) => (
        <button
          key={tab.title}
          className={`${selected == tab.title && "selected"}`}
          onClick={() => setSelected(tab.title)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default memo(TabState);
