import { useState, useEffect } from "react";
import rgbHex from "../Utilities/utilities";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  rgbHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <>
      <article
        className={`color${index > 10 && "color-light"} rounded-lg `}
        style={{ background: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">Copied to Clipboard</p>}
      </article>
    </>
  );
}

export default SingleColor;
