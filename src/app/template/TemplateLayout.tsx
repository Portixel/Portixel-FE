import Tab from "@/components/TabPath";
import TemplateTopMenu from "@/components/TemplateTopMenu";
import "@/style/index.scss";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const TemplateLayout = () => {
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

        <div className="search"></div>

        <TemplateTopMenu />
      </div>

      <div className="JoinEmail Template">
        <div className="left">
          <Link to="/onboard" className="back">
            <img alt="" src="/icon/down.svg" height={14} width={14} />
            <p>Back</p>
          </Link>

          <h4 className="title">Choose Template</h4>

          <p className="subTitle">
            Portixiel offers you a well optimized template for your portfolio.
            Templates can be modified from your dashboard
          </p>

          <Tab Tabs={Tabs} />

          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TemplateLayout;

const Tabs = [
  {
    title: "More Generated Template",
    url: "/template",
  },
  {
    title: "Featured 🔥",
    url: "/template/featured",
  },
];
