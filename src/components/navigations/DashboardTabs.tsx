import { DashboardProjectsURLS } from "@/app/dashboard/projects/DashboardProjectsLayout";
import { circlePath } from "@/utils/path";
import { Link, useLocation } from "react-router-dom";

const DashboardTabs = () => {
  const path = useLocation().pathname;

  const ProjectsAndNavs = DashboardProjectsURLS.map((u) => u.url).concat(
    DashboardNavs.map((u) => u.url)
  );

  return (
    <div
      className="DashboardTabs"
      style={{
        display: ProjectsAndNavs.includes(path) ? "" : "none",
      }}
    >
      {DashboardNavs.map((nav) => (
        <div
          className={`option ${circlePath([nav]).includes(path) && "selected"}`}
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
    children: DashboardProjectsURLS,
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
