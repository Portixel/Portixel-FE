import ProCard from "@/components/ProCard";
import ProjectCards from "@/components/ProjectCards";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain">
        <p className="intro">Your portfolio</p>

        <ProCard />

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
    bgImg: "/template/image1.png",
    time: "Edited 12mins ago",
  },
];
