import CreateNewMenu from "@/components/CreateNewMenu";
import { SET_GENERATE_MODAL_STATE } from "@/redux/util/utilSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DashboardTopMenu = () => {
  const dispatch = useDispatch();
  const [toggleCreateNew, setToggleCreateNew] = useState(false);

  const handleProfilePic = () => {};
  const handleCreateNew = () => {
    setToggleCreateNew(true);
  };

  const handleGeneratePortfolio = () => {
    dispatch(SET_GENERATE_MODAL_STATE({ generateModalIsOpen: true }));
  };

  return (
    <div className="DashboardTopMenu">
      <button onClick={handleGeneratePortfolio} className="ai">
        <img alt="" src="/icon/ai.svg" height={18} width={18} />
        <p>Generate Portfolio</p>
      </button>

      <div className="createNewParent">
        <button onClick={handleCreateNew} className="new">
          <p>Create New</p>
          <img
            alt=""
            src="/icon/downBg.svg"
            height={18}
            width={18}
            style={{ transform: `rotate(${toggleCreateNew ? 180 : 0}deg)` }}
          />
        </button>

        {toggleCreateNew && (
          <CreateNewMenu setToggleCreateNew={setToggleCreateNew} />
        )}
      </div>

      <button onClick={handleProfilePic} className="dp">
        <span>OF</span>
      </button>
    </div>
  );
};

export default DashboardTopMenu;
