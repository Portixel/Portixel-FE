import DashboardSideBar from "@/components/navigations/DashboardSideBar";
import DashboardTopMenu from "@/components/DashboardTopMenu";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import DashboardTabs from "@/components/navigations/DashboardTabs";
const NewPortfolioModal = lazy(() => import("@/components/NewPortfolioModal"));
const ImportModal = lazy(() => import("@/components/import/ImportModal"));

const DashboardLayout = () => {
  return (
    <div className="Join Dashboard">
      <DashboardSideBar />

      <div className="dashboardRight">
        <div className="dashboardRightTop">
          <input
            type="search"
            className="search"
            placeholder="Search any portfolio template"
          />

          <DashboardTopMenu />
        </div>

        <div className="bottom">
          <DashboardTabs />

          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>

        <Suspense fallback={<></>}>
          <NewPortfolioModal />
        </Suspense>

        <Suspense fallback={<></>}>
          <ImportModal />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
