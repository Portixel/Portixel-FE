import { Link, useLocation } from "react-router-dom";

interface ITabProp<T = { title: string; url: string }[]> {
  Tabs: T;
}

const TabPath = ({ Tabs }: ITabProp) => {
  const selected = useLocation().pathname;

  return (
    <div className="Tab">
      {Tabs.map((tab) => (
        <Link
          to={tab.url}
          key={tab.title}
          className={`${selected == tab.url && "selected"}`}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
};

export default TabPath;
