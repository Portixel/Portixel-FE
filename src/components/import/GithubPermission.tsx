import Success from "@/components/Success";
import { IRootStore } from "@/redux/store";
import { SET_IMPORT_PROJECT_STATE } from "@/redux/util/utilSlice";
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GithubPermission = () => {
  const [all, setAll] = useState(false);
  const [some, setSome] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const {
    importProject: {
      github: { permissionIsOpen },
    },
  } = useSelector((state: IRootStore) => state?.util);

  const closeModal = () => {
    dispatch(SET_IMPORT_PROJECT_STATE({}));
  };

  const grantAccess = () => {
    setSuccess(true);
    dispatch(SET_IMPORT_PROJECT_STATE({}));
    setTimeout(() => setSuccess(false), 1000);
  };

  const blockPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {success ? (
        <Success message="Integrating Github to Portixel App" />
      ) : (
        <div
          className="modalParent"
          onClick={closeModal}
          style={{ display: permissionIsOpen ? "flex" : "none" }}
        >
          <div
            className="ImportModal GithubInfo GithubPermission"
            onClick={blockPropagation}
          >
            <h4 className="title">Allow Access</h4>

            <label htmlFor="all">
              <input
                type="checkbox"
                id="all"
                checked={all}
                onChange={(e) => setAll(e.target.checked)}
              />
              <div className="right">
                <p className="summary">All Repository</p>
                <p className="body">
                  This will allow all current and future repositories owned by
                  the resource owner(Read only)
                </p>
              </div>
            </label>

            <label htmlFor="some">
              <input
                type="checkbox"
                id="some"
                checked={some}
                onChange={(e) => setSome(e.target.checked)}
              />
              <div className="right">
                <p className="summary">Only Selected Repository</p>
                <p className="body">
                  Selected few will allow repositories owned by the resource
                  owner(Read only)
                </p>
              </div>
            </label>

            <div className="actions">
              <button onClick={closeModal} className="options cancel">
                Cancel
              </button>

              <button onClick={grantAccess} className="options connect">
                Give Access
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GithubPermission;
