import UploadFilesCard from "@/components/import/UploadFilesCard";
import Loader from "@/components/Loader";
import Success from "@/components/Success";
import { IRootStore } from "@/redux/store";
import { SET_IMPORT_PROJECT_STATE } from "@/redux/util/utilSlice";
import { DragEvent, MouseEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UploadFiles = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const {
    importProject: {
      upload: { infoIsOpen },
    },
  } = useSelector((state: IRootStore) => state?.util);

  const blockPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    dispatch(SET_IMPORT_PROJECT_STATE({}));
    setSelectedFiles([]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files : null;
    if (file) {
      setSelectedFiles([...selectedFiles, ...file]);
    }
    if (inputRef.current?.files) {
      inputRef.current.value = "";
    }
  };

  const handleFileDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDelete = (target: number) => {
    setSelectedFiles([
      ...selectedFiles.slice(0, target),
      ...selectedFiles.slice(target + 1),
    ]);
  };

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        closeModal();
      }, 2000);
    }, 1000);
  };

  return loading ? (
    <div className="modalParent">
      <Loader message="Uploading your documents..." />
    </div>
  ) : success ? (
    <Success message="Uploading your documents" />
  ) : (
    <div
      className="modalParent"
      onClick={closeModal}
      style={{ display: infoIsOpen ? "flex" : "none" }}
    >
      <div
        className="ImportModal GithubInfo UploadFiles"
        onClick={blockPropagation}
      >
        <p className="title">Upload Files</p>

        <div
          className="drop"
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <img src="/icon/file.svg" alt="" height={30} width={30} />
          <div className="instruction">
            <p>
              Drag and drop file here or{" "}
              <span className="action">Click to Upload</span>
            </p>
          </div>

          <input
            type="file"
            onChange={handleFileChange}
            ref={inputRef}
            multiple
            title={`${selectedFiles.length} file${
              selectedFiles.length > 1 ? "s" : ""
            } has been selected`}
          />
        </div>

        <div className="subInstruction">
          <p>Supported Formats PNG, JPEG, PDF, XLS, Doc</p>

          <p>25MB Max</p>
        </div>

        {selectedFiles.length > 0 && (
          <div className="files">
            {selectedFiles.map((file, index) => (
              <UploadFilesCard
                key={file.webkitRelativePath}
                Data={file}
                onDelete={handleDelete}
                index={index}
              />
            ))}
          </div>
        )}

        <div className="actions">
          <button onClick={closeModal} className="options cancel">
            Cancel
          </button>

          <button onClick={handleUpload} className="options connect">
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
