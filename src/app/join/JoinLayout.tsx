import Tab from "@/components/TabPath";
import "@/style/index.scss";
import { Link, Outlet } from "react-router-dom";

const JoinLayout = () => {
  return (
    <div className="Join">
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

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default JoinLayout;

const Tabs = [
  {
    title: "Email Address",
    url: "/join",
  },
  {
    title: "Connect Wallet",
    url: "/join/wallet",
  },
];
