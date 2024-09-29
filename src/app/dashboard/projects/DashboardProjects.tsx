import ProCard from "@/components/ProCard";
import ProjectCards2 from "@/components/ProjectCards2";
import TabState from "@/components/TabState";
import {
  DashboardProjectsData,
  DashboardProjectsTabs,
} from "@/data/Dashboard.mock";
import { Suspense, useState } from "react";

const DashboardProjects = () => {
  const [tab, setTab] = useState(DashboardProjectsTabs[0].title);

  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain DashboardProjects">
        <p className="intro">All Projects</p>

        <ProCard />

        <TabState
          Tabs={DashboardProjectsTabs}
          selected={tab}
          setSelected={setTab}
        />

        <div className="cards">
          {DashboardProjectsData.map((portfolio) => (
            <ProjectCards2 key={portfolio.id} Data={portfolio} />
          ))}

          {DashboardProjectsData.length == 0 && (
            <div className="empty">No data yet</div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardProjects;
