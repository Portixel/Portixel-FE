import { useState } from "react";
import { Link } from "react-router-dom";

const TemplateMore = () => {
  const [selected, setSelected] = useState(Images[0]?.src);

  const handleSelected = (value: string) => {
    setSelected(value);
  };

  return (
    <>
      <div className="templatesCard">
        {Images.map((image) => (
          <button
            key={image.src}
            onClick={() => handleSelected(image.src)}
            className={selected == image.src ? "selected" : ""}
          >
            <div className="wrapper">
              <img
                alt=""
                src={image.src}
                height={96}
                width={156}
                className="banner"
              />

              <img
                alt=""
                src={"/icon/tick.svg"}
                height={19}
                width={19}
                className="tick"
              />
            </div>
          </button>
        ))}
      </div>

      <Link to="/join" className="submit goToDashboard">
        Go To Dashboard
      </Link>
    </>
  );
};

export default TemplateMore;

const Images = [
  {
    src: "/icon/templateMockUp1.png",
  },
  {
    src: "/icon/templateMockUp2.png",
  },
  {
    src: "/icon/templateMockUp3.png",
  },
  {
    src: "/icon/templateMockUp4.png",
  },
];
