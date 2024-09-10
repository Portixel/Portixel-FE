import { memo } from "react";

interface IProjectCards {
  Data: { id: string; bgImg: string; url: string; time: string };
}

const ProjectCards = ({ Data: { bgImg, url, time } }: IProjectCards) => {
  return (
    <div className="ProjectCard">
      <div className="bg" style={{ backgroundImage: `url("${bgImg}")` }}>
        {bgImg}
      </div>
      <div className="left">
        <p className="url">{url}</p>

        <p className="time">{time}</p>
      </div>

      <div className="right">
        <div className="dp">
          <p>OF</p>
        </div>

        <button className="more">
          <img alt="" src="/icon/more.svg" width={34} height={20} />
        </button>
      </div>
    </div>
  );
};

export default memo(ProjectCards);
