import { memo } from "react";

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
  return (
    <div
      className="ProjectCard2"
      style={{ backgroundImage: `url("${bgImg}")` }}
    >
      <div className="bottom">
        <p className="file">{title}</p>
        <p className="size">{size}</p>
        <p className="date">{date}</p>
        <button className="more">
          <img alt="" src="/icon/more.svg" width={34} height={20} />
        </button>
      </div>
    </div>
  );
};

export default memo(ProjectCards);
