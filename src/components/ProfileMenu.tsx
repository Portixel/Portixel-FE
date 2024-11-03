import { MouseEvent } from "react";

const ProfileMenu = ({
  setToggleProfileMenu,
}: {
  setToggleProfileMenu: (data: boolean) => void;
}) => {
  const hideSelf = () => {
    setToggleProfileMenu(false);
  };

  const cancelPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div className="modalParent" onClick={hideSelf}></div>

      <div className="ProfileMenu" onClick={cancelPropagation}>
        <div className="top">
          <div className="dp">
            <span>OF</span>
          </div>

          <p className="email">emerie.design@gmail.com</p>

          <button className="exit">
            <p className="tag">F54rfghsyua87gjqo804outhogaergjao</p>

            <img src="/icon/exit.svg" alt="" height={20} width={20} />
          </button>
        </div>

        <button className="option">
          <p>Manage account</p>
          <img
            src="/icon/down.svg"
            alt=""
            height={20}
            width={20}
            className="rightArrow"
          />
        </button>

        <button className="action">
          <p>Create Sub Portfolio</p>
        </button>
      </div>
    </>
  );
};
export default ProfileMenu;
