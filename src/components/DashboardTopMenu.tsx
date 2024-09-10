import { SET_GENERATE_MODAL_STATE } from "@/redux/util/utilSlice";
import { useDispatch } from "react-redux";

const DashboardTopMenu = () => {
  const dispatch = useDispatch();
  const handleProfilePic = () => {};
  const handleCreateNew = () => {};

  const handleGeneratePortfolio = () => {
    dispatch(SET_GENERATE_MODAL_STATE({ generateModalIsOpen: true }));
  };

  return (
    <div className="DashboardTopMenu">
      <button onClick={handleGeneratePortfolio} className="ai">
        <img alt="" src="/icon/ai.svg" height={18} width={18} />
        <p>Generate Portfolio</p>
      </button>

      <button onClick={handleCreateNew} className="new">
        <p>Create New</p>
        <img alt="" src="/icon/downBg.svg" height={18} width={18} />
      </button>

      <button onClick={handleProfilePic} className="dp">
        <span>OF</span>
      </button>
    </div>
  );
};

export default DashboardTopMenu;
