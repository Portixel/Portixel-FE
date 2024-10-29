import FigmaInfo from "@/components/import/FigmaInfo";
import GithubInfo from "@/components/import/GithubInfo";
import UploadFiles from "@/components/import/UploadFiles";
import { IRootStore } from "@/redux/store";
import { SET_IMPORT_PROJECT_STATE } from "@/redux/util/utilSlice";
import { utilStateType } from "@/redux/util/utilTypes";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const ImportModal = () => {
  const dispatch = useDispatch();
  const {
    importProject: { modalIsOpen },
  } = useSelector((state: IRootStore) => state?.util);

  const closeModal = () => {
    dispatch(SET_IMPORT_PROJECT_STATE({}));
  };

  const openModalOptions = (target: keyof utilStateType["importProject"]) => {
    dispatch(
      SET_IMPORT_PROJECT_STATE({
        importProject: { [target]: { infoIsOpen: true } },
      })
    );
  };

  const blockPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="modalParent"
        onClick={closeModal}
        style={{ display: modalIsOpen ? "flex" : "none" }}
      >
        <div className="ImportModal" onClick={blockPropagation}>
          <div className="top">
            <h4 className="title">Import Files</h4>

            <button onClick={closeModal}>
              <img alt="" src="/icon/close.svg" width={24} height={24} />
            </button>
          </div>

          <p className="subTitle">
            Import your project files and easily add to your portfolio or
            publish to our marketplace and earn a reusable reward
          </p>

          <button
            onClick={() => openModalOptions("github")}
            className="options"
          >
            <p>Import from Github</p>
          </button>

          <button onClick={() => openModalOptions("figma")} className="options">
            <p>Import from Figma</p>
          </button>

          <button
            onClick={() => openModalOptions("upload")}
            className="options"
          >
            <p>Upload file</p>
            <img alt="" src="/icon/upload2.svg" width={18} height={18} />
          </button>
        </div>
      </div>

      <GithubInfo />
      <FigmaInfo />
      <UploadFiles />
    </>
  );
};

export default ImportModal;
