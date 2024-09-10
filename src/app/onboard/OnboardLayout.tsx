import Tab from "@/components/TabPath";
import "@/style/index.scss";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const OnboardLayout = () => {
  return (
    <div className="Join Onboard">
      <div className="left">
        <Link to="/">
          <img
            alt="Portixel Logo"
            src="/icon/logo.svg"
            width={35}
            height={35}
            className="logo"
          />
        </Link>

        <div className="bottom">
          <Tab Tabs={Tabs} />

          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default OnboardLayout;

const Tabs = [
  {
    title: "Individual",
    url: "/onboard",
  },
  {
    title: "Agency",
    url: "/onboard/agency",
  },
];
