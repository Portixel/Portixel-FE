import { FormEvent, useState } from "react";

const CreateNewMenu = ({
  setToggleCreateNew,
}: {
  setToggleCreateNew: (data: boolean) => void;
}) => {
  const [toggleImport, setToggleImport] = useState(false);

  const hideSelf = () => {
    setToggleCreateNew(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    hideSelf();
  };

  return (
    <>
      <div className="modalParent" onClick={hideSelf}></div>

      <div className="CreateNewMenu">
        <button onClick={() => setToggleImport(!toggleImport)}>
          <p>Import through link</p>
          <img
            alt=""
            src="/icon/down.svg"
            width={20}
            height={20}
            className="logo"
            style={{ transform: `rotate(${toggleImport ? 180 : 0}deg)` }}
          />
        </button>

        {toggleImport && (
          <form onSubmit={handleSubmit}>
            <input type="url" placeholder="Paste Link here" />
            <input type="submit" value="Import" className="submit" />
          </form>
        )}

        <button>
          <p>Blank Canvas</p>
        </button>
      </div>
    </>
  );
};
export default CreateNewMenu;
