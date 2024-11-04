import { memo } from "react";

interface IProjectCards {
  Data: { id: string; bgImg: string };
}

const ProjectCards = ({ Data: { bgImg } }: IProjectCards) => {
  return (
    <div className="ProjectCard">
      <img src={bgImg} alt="" height={144} width={321} />

      <div className="bottom">
        <div className="dp">
          <p>OF</p>
        </div>

        <p className="url">emerie.portixel.website</p>

        <button className="more">
          <img alt="" src="/icon/more.svg" width={34} height={20} />
        </button>
      </div>
    </div>
  );
};

export default memo(ProjectCards);
