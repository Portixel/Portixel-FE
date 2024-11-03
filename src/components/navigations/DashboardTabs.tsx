import { Link, useLocation } from "react-router-dom";

const DashboardTabs = () => {
  const path = useLocation().pathname;

  return (
    <div
      className="DashboardTabs"
      style={{
        display: DashboardNavs.map((n) => n.url).includes(path) ? "" : "none",
      }}
    >
      {DashboardNavs.map((nav) => (
        <div
          className={`option ${path == nav.url && "selected"}`}
          key={nav.name}
        >
          <Link to={nav.url}>{nav.name}</Link>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default DashboardTabs;

export const DashboardNavs = [
  {
    name: "Portfolio",
    url: "/dashboard",
  },
  {
    name: "Projects",
    url: "/dashboard/projects",
  },
  {
    name: "Domain",
    url: "/dashboard/domain",
  },
  {
    name: "Integration",
    url: "/dashboard/integration",
  },
  {
    name: "Resume",
    url: "/dashboard/resume",
  },
];
