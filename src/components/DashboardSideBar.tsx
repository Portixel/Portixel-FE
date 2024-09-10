import { Link, useLocation } from "react-router-dom";

const DashboardSideBar = () => {
  const selected = useLocation().pathname;

  return (
    <div className="DashboardSideBar">
      <div className="mainLinks">
        {Tabs.map((tab) => (
          <Link
            to={tab.url}
            key={tab.title}
            className={`${selected == tab.url && "selected"}`}
          >
            <img alt="" height={14} width={14} src="/icon/tickPlane.svg" />
            {tab.title}
          </Link>
        ))}

        <button className="new">
          <p>Create a Team</p>
          <img alt="" height={20} width={20} src="/icon/add.svg" />
        </button>

        <span className="split"></span>

        <Link
          to={SettingUrl.url}
          key={SettingUrl.title}
          className={`${selected == SettingUrl.url && "selected"}`}
        >
          <img alt="" height={14} width={14} src="/icon/tickPlane.svg" />
          {SettingUrl.title}
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;

const Tabs = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
  },
  {
    title: "Marketplace",
    url: "/dashboard/marketplace",
  },
];

const SettingUrl = { title: "Settings", url: "/dashboard/settings" };
