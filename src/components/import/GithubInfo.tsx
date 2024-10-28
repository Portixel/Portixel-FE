import GithubPermission from "@/components/import/GithubPermission";
import Loader from "@/components/Loader";
import { IRootStore } from "@/redux/store";
import { SET_IMPORT_PROJECT_STATE } from "@/redux/util/utilSlice";
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GithubInfo = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    importProject: {
      github: { infoIsOpen },
    },
  } = useSelector((state: IRootStore) => state?.util);

  const closeModal = () => {
    dispatch(SET_IMPORT_PROJECT_STATE({}));
  };

  const openPermission = () => {
    dispatch(SET_IMPORT_PROJECT_STATE({}));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(
        SET_IMPORT_PROJECT_STATE({
          importProject: { github: { permissionIsOpen: true } },
        })
      );
    }, 1000);
  };

  const blockPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return loading ? (
    <div className="modalParent">
      <Loader message="Integrating Github to Portixel App" />
    </div>
  ) : (
    <>
      <div
        className="modalParent"
        onClick={closeModal}
        style={{ display: infoIsOpen ? "flex" : "none" }}
      >
        <div className="ImportModal GithubInfo" onClick={blockPropagation}>
          <h4 className="title">Integration</h4>

          <div className="top">
            <img alt="" src="/icon/github.svg" width={40} height={40} />
            <h4>Connect Github to Portixel</h4>
          </div>

          <div className="subTitle">
            Integrating Github to Portixel will enable you to:
            <ul className="points">
              <li>Import your repository data to Portixel </li>
              <li>Publish repository to a functional interactive website.</li>
              <li>Read data from the host application</li>
            </ul>
          </div>

          <div className="actions">
            <button onClick={closeModal} className="options cancel">
              Cancel
            </button>

            <button onClick={openPermission} className="options connect">
              Connect Github Organization
            </button>
          </div>
        </div>
      </div>

      <GithubPermission />
    </>
  );
};

export default GithubInfo;
