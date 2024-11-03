import { Link, useLocation } from "react-router-dom";

const DashboardSideBar = () => {
  const selected = useLocation().pathname;

  return (
    <div className="DashboardSideBar">
      <Link to="/" className="logo">
        <img
          alt="Portixel Logo"
          src="/icon/logoFull.svg"
          width={100}
          height={28}
        />
      </Link>

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
    title: "Marketplace",
    url: "/dashboard/marketplace",
  },
  {
    title: "Manage team",
    url: "/dashboard/projects",
  },
];
