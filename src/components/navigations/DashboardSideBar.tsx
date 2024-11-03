import { DashboardNavs } from "@/components/navigations/DashboardTabs";
import { Link, useLocation } from "react-router-dom";

const DashboardSideBar = () => {
  const path = useLocation().pathname;

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
            className={`${
              (tab.children ? tab.children.includes(path) : path == tab.url) &&
              "selected"
            }`}
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
    children: DashboardNavs.map((v) => v.url),
  },

  {
    title: "Marketplace",
    url: "/dashboard/marketplace",
  },
  {
    title: "Manage team",
    url: "/dashboard/team",
  },
];
