import { MouseEvent } from "react";

const Success = ({ message }: { message: string }) => {
  const closeModal = () => {};

  const blockPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="modalParent" onClick={closeModal} style={{}}>
      <div className="Success" onClick={blockPropagation}>
        <img src="/icon/success.svg" alt="" width={114} height={113} />

        <p className="message">{message}</p>

        <p>Successful</p>
      </div>
    </div>
  );
};

export default Success;
