import ProjectCards from "@/components/ProjectCards";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain">
        <p className="intro">Your portfolio</p>

        <div className="pro">
          <img alt="" src="/icon/shapes.svg" width={20} height={20} />
          <p>You can create a sub-portfolio account under your profile</p>

          <button>Upgrade to Pro</button>
        </div>

        <div className="cards">
          {Portfolios.map((portfolio) => (
            <ProjectCards key={portfolio.id} Data={portfolio} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Dashboard;

const Portfolios = [
  {
    id: "1",
    url: "emerie.portixel.website",
    bgImg: "/icon/templateMockUp1.png",
    time: "Edited 12mins ago",
  },
];
