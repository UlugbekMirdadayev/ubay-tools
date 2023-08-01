import React, { useCallback, useRef, useState } from "react";
import { AccordStyled } from "./style";
import { Arrow, CloseArrow } from "../icon";

const Accord = ({ title, body, ...props }) => {
  const [style, setStyle] = useState({});
  const panel = useRef(null);

  const handleOpenAccord = useCallback(() => {
    if (panel?.current && !style?.maxHeight) {
      setStyle({ maxHeight: panel?.current?.scrollHeight });
    } else {
      setStyle({ maxHeight: 0 });
    }
  }, [panel, style]);

  return (
    <AccordStyled {...props}>
      <button className="accordion" onClick={handleOpenAccord}>
        <span>{title}</span>
        {style?.maxHeight ? <CloseArrow /> : <Arrow />}
      </button>
      <div
        className={`panel ${style?.maxHeight ? "open" : ""}`}
        style={style}
        ref={panel}
      >
        {body}
      </div>
    </AccordStyled>
  );
};

export default Accord;
