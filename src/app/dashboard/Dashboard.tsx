import ProCard from "@/components/ProCard";
import ProjectCards from "@/components/ProjectCards";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <Suspense fallback={<></>}>
      <div className="DashboardMain">
        <div className="header">
          <p className="intro">Your portfolio</p>

          <button className="edit">
            <img src="/icon/edit.svg" alt="" height={18} width={18} />
            <p>Edit Portfolio</p>
          </button>
        </div>

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
