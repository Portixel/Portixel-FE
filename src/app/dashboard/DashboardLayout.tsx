import DashboardSideBar from "@/components/DashboardSideBar";
import DashboardTopMenu from "@/components/DashboardTopMenu";
import { lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
const NewPortfolioModal = lazy(() => import("@/components/NewPortfolioModal"));
const ImportModal = lazy(() => import("@/components/import/ImportModal"));

const DashboardLayout = () => {
  return (
    <div className="Join Dashboard">
      <div className="top">
        <Link to="/">
          <img
            alt="Portixel Logo"
            src="/icon/logoFull.svg"
            width={100}
            height={28}
            className="logo"
          />
        </Link>

        <input
          type="search"
          className="search"
          placeholder="Search any portfolio template"
        />

        <DashboardTopMenu />
      </div>

      <div className="bottom">
        <DashboardSideBar />

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
  );
};

export default DashboardLayout;
