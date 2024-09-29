import ProCard from "@/components/ProCard";
import ProjectCards2 from "@/components/ProjectCards2";
import TabState from "@/components/TabState";
import { Suspense, useState } from "react";

const DashboardProjects = () => {
  const [tab, setTab] = useState(Tabs[0].title);

  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain DashboardProjects">
        <p className="intro">All Projects</p>

        <ProCard />

        <TabState Tabs={Tabs} selected={tab} setSelected={setTab} />

        <div className="cards">
          {Projects.map((portfolio) => (
            <ProjectCards2 key={portfolio.id} Data={portfolio} />
          ))}

          {Projects.length == 0 && <div className="empty">No data yet</div>}
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardProjects;

const Projects = [
  {
    id: "1",
    bgImg: "/icon/templateMockUp5.png",
    title: "emerie.png",
    size: "10MB",
    date: "27/08/2024",
  },
  {
    id: "2",
    bgImg: "/icon/templateMockUp6.png",
    title: "emerie.png",
    size: "10MB",
    date: "27/08/2024",
  },
  {
    id: "3",
    bgImg: "/icon/templateMockUp7.png",
    title: "emerie.png",
    size: "10MB",
    date: "27/08/2024",
  },
];

const Tabs = [
  {
    title: "All Projects",
  },
  {
    title: "Github",
  },
  {
    title: "Figma",
  },
  {
    title: "Marketplace",
  },
  {
    title: "Others",
  },
];
