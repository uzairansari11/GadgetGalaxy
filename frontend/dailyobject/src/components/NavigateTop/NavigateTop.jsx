import React from "react";
import "./navigatetoTop.css";
import { Link } from "react-scroll";
const NavigatetoTop = () => {
  return (
    <>
      <Link to={"navbar"} smooth duration={1500}>
        <div id="up">
          <img
            src="https://th.bing.com/th/id/R.8d67a697e656d346af56352b34da8723?rik=Bc1eYsjHVEjHjw&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgie555ozT.png&ehk=LC0PCad5chES91cx%2b2Bt5yiw7K7KoRaIDcGaw2so2JE%3d&risl=&pid=ImgRaw&r=0"
            alt="top"
          />
        </div>
      </Link>
    </>
  );
};

export default NavigatetoTop;
