import ProfileMenu from "@/components/ProfileMenu";
import {
  SET_GENERATE_MODAL_STATE,
  SET_IMPORT_PROJECT_STATE,
} from "@/redux/util/utilSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DashboardTopMenu = () => {
  const dispatch = useDispatch();
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);

  const handleProfilePic = () => {
    setToggleProfileMenu(!toggleProfileMenu);
  };

  const handleGeneratePortfolio = () => {
    dispatch(SET_GENERATE_MODAL_STATE({ generateModalIsOpen: true }));
  };

  const handleImportProject = () => {
    dispatch(
      SET_IMPORT_PROJECT_STATE({ importProject: { modalIsOpen: true } })
    );
  };

  return (
    <div className="DashboardTopMenu">
      <button onClick={handleGeneratePortfolio} className="ai">
        <img alt="" src="/icon/aiBlue.svg" height={18} width={18} />
        <p>Generate Interface</p>
      </button>

      <button onClick={handleImportProject} className="new import">
        <p>Import Works</p>
      </button>

      <button className="profileMenuParent" onClick={handleProfilePic}>
        <div className="dp">
          <span>OF</span>
        </div>

        <img
          alt=""
          src="/icon/down.svg"
          height={20}
          width={20}
          style={{ transform: `rotate(${toggleProfileMenu ? 180 : 0}deg)` }}
        />

        {toggleProfileMenu && (
          <ProfileMenu setToggleProfileMenu={setToggleProfileMenu} />
        )}
      </button>
    </div>
  );
};

export default DashboardTopMenu;
