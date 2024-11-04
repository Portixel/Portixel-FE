import { circlePath, IURLChildren } from "@/utils/path";
import { Link, useLocation } from "react-router-dom";

interface ITabsURLProps {
  Data: IURLChildren[];
}

const TabsURL = ({ Data }: ITabsURLProps) => {
  const path = useLocation().pathname;

  return (
    <div className="TabsURL">
      {Data.map((data) => (
        <Link
          to={data.url}
          className={`${circlePath([data]).includes(path) && "selected"}`}
          key={data.title}
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
};

export default TabsURL;
