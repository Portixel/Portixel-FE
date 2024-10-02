const ProjectModal = ({
  toggleProjectModal,
}: {
  toggleProjectModal: (data: boolean) => void;
}) => {
  const hideSelf = () => {
    toggleProjectModal(false);
  };

  return (
    <div className="modalParent" onClick={hideSelf}>
      <div className="ProjectModal">
        <button onClick={hideSelf}>
          <p>Publish to Marketplace</p>
          <img alt="share" src="/icon/share.svg" width={20} height={20} />
        </button>

        <button onClick={hideSelf}>
          <p>Edit</p>
        </button>

        <button onClick={hideSelf}>
          <p>Duplicate</p>
        </button>

        <span className="split"></span>

        <button onClick={hideSelf} className="delete">
          <p>Delete</p>
          <img
            alt="Portixel Logo"
            src="/icon/trash.svg"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
