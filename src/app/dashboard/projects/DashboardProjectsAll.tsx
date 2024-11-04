import ProjectCards2 from "@/components/ProjectCards2";
import { DashboardProjectsData } from "@/data/Dashboard.mock";
import { Suspense } from "react";

const DashboardProjectsAll = () => {
  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain DashboardProjects">
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

export default DashboardProjectsAll;
