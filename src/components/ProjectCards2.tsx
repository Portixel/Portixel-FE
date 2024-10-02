import ProjectModal from "@/components/ProjectModal";
import { memo, useState } from "react";

interface IProjectCards {
  Data: {
    id: string;
    bgImg: string;
    title: string;
    size: string;
    date: string;
  };
}

const ProjectCards = ({
  Data: { bgImg, title, size, date },
}: IProjectCards) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div
        className={`ProjectCard2 ${toggleMenu && "selected"}`}
        style={{ backgroundImage: `url("${bgImg}")` }}
      >
        <div className="bottom">
          <p className="file">{title}</p>
          <p className="size">{size}</p>
          <p className="date">{date}</p>

          <button
            className="more"
            onClick={() => {
              setToggleMenu(true);
            }}
          >
            <img alt="" src="/icon/more.svg" width={34} height={20} />
          </button>
        </div>
      </div>

      {toggleMenu && <ProjectModal toggleProjectModal={setToggleMenu} />}
    </>
  );
};

export default memo(ProjectCards);
