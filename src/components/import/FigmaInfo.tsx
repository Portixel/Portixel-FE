import { IRootStore } from "@/redux/store";
import { SET_IMPORT_PROJECT_STATE } from "@/redux/util/utilSlice";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FigmaInfo = () => {
  const dispatch = useDispatch();
  const {
    importProject: {
      figma: { infoIsOpen },
    },
  } = useSelector((state: IRootStore) => state?.util);

  const closeModal = () => {
    dispatch(SET_IMPORT_PROJECT_STATE({}));
  };

  const blockPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="modalParent"
        onClick={closeModal}
        style={{ display: infoIsOpen ? "flex" : "none" }}
      >
        <div className="ImportModal GithubInfo" onClick={blockPropagation}>
          <h4 className="title">Import from Figma</h4>

          <div className="top">
            <img alt="" src="/icon/figma.png" width={35} height={35} />
            <h4>Connect Figma to Portixel</h4>
          </div>

          <div className="subTitle">
            Copy your work in two ways:
            <ul className="points">
              <li>
                Install our Figma to Portixel Chrome Extension and copy elements
                into Portixel.
              </li>
              <li>
                Install the Figma to Portixel plugin in figma and copy your
                works.
              </li>
            </ul>
          </div>

          <div className="actions">
            <Link
              to="https://www.figma.com/community/design-tools?resource_type=plugins"
              target="_blank"
              onClick={closeModal}
              className="options cancel"
            >
              Go to Figma Plugin
            </Link>

            <Link
              to="https://chromewebstore.google.com/"
              target="_blank"
              onClick={closeModal}
              className="options connect"
            >
              Install Extension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FigmaInfo;
