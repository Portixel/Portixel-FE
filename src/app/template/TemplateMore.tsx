import { Suspense, useState } from "react";
import { Link } from "react-router-dom";

const TemplateMore = () => {
  const [selected, setSelected] = useState(Images[0]?.src);

  const handleSelected = (value: string) => {
    setSelected(value);
  };

  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
};

export default TemplateMore;

const Images = [
  {
    src: "/template/image1.png",
  },
  {
    src: "/template/image2.png",
  },
  {
    src: "/template/image3.png",
  },
  {
    src: "/template/image4.png",
  },
];
