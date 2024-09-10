import DashboardSideBar from "@/components/DashboardSideBar";
import DashboardTopMenu from "@/components/DashboardTopMenu";
// import NewPortfolioModal from "@/components/reusable/NewPortfolioModal";
import { Link, Outlet } from "react-router-dom";

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

        <Outlet />
      </div>

      {/* <NewPortfolioModal /> */}
    </div>
  );
};

export default DashboardLayout;
