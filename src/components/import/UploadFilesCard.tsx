import { useEffect, useState } from "react";

interface IUploadFilesCardProp {
  index: number;
  Data: File;
  onDelete: (indexOfTarget: number) => void;
}

const UploadFilesCard = ({ Data, onDelete, index }: IUploadFilesCardProp) => {
  const start = 0;
  const end = 100;
  const duration = 1000;
  const [currentValue, setCurrentValue] = useState(start);

  useEffect(() => {
    const range = end - start;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1

      const current = start + range * progress;
      setCurrentValue(() => parseInt(current.toFixed(0)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);

    return () => {
      setCurrentValue(start);
    };
  }, [start, end, duration]);

  return (
    <div className="UploadFilesCard">
      <img src="/icon/thumbnail.svg" alt="" height={20} width={20} />

      <div className="right">
        <div className="top">
          <p className="name">{Data.name}</p>

          <button onClick={() => onDelete(index)}>
            <img src="/icon/close.svg" alt="" height={18} width={18} />
          </button>
        </div>
        <div className="size">
          {((currentValue / 100) * (Data.size / 1024 / 1024)).toFixed(3)} MB
        </div>

        <div className="bottom">
          <div className="loading">
            <div className="bar" style={{ width: `${currentValue}%` }}></div>
          </div>

          <p className="percentage">{currentValue}%</p>
        </div>
      </div>
    </div>
  );
};

export default UploadFilesCard;
