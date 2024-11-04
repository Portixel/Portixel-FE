import TabsURL from "@/components/navigations/TabsURL";
import ProCard from "@/components/ProCard";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const DashboardProjectsLayout = () => {
  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain DashboardProjects">
        <div className="header">
          <p className="intro">My Projects</p>
        </div>

        <ProCard
          img="/icon/train.svg"
          title="Import more than two project works"
        />

        <TabsURL Data={DashboardProjectsURLS} />

        <Outlet />
      </div>
    </Suspense>
  );
};

export default DashboardProjectsLayout;

export const DashboardProjectsURLS = [
  {
    title: "My Projects",
    url: "/dashboard/projects",
  },
  {
    title: "Github",
    url: "/dashboard/projects/github",
  },
  {
    title: "Figma",
    url: "/dashboard/projects/figma",
  },
  {
    title: "Marketplace",
    url: "/dashboard/projects/marketplace",
  },
  {
    title: "Others",
    url: "/dashboard/projects/others",
  },
];
