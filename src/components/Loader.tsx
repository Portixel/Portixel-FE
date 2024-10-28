const Loader = ({ message }: { message: string }) => {
  return (
    <div className="Loader">
      <img
        alt="Portixel Logo"
        src="/icon/logo.svg"
        width={43}
        height={43}
        className="logo"
      />
      <p>{message}</p>
    </div>
  );
};

export default Loader;
