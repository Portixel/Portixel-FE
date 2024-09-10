const TemplateTopMenu = () => {
  const handleFullScreen = () => {};

  const handleDesktop = () => {};

  return (
    <div className="TemplateTopMenu">
      <button onClick={handleFullScreen}>
        <p>Full Screen</p>
        <img alt="" src="/icon/play.svg" height={20} width={20} />
      </button>

      <span></span>

      <button onClick={handleDesktop}>
        <p>Desktop</p>
        <img alt="" src="/icon/down.svg" height={14} width={14} />
      </button>
    </div>
  );
};

export default TemplateTopMenu;
