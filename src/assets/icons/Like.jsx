import color from "./HeartColor.svg";
import black from "./HeartBlack.svg";
import { useState } from "react";

export const Like = ({ isClicked }) => {
  let [click, setClick] = useState(isClicked);
  return (
    <button
      style={{
        background: "inherit",
        border: "none",
        boxShadow: "none",
        borderRadius: 0,
        padding: 0,
        overflow: "visible",
        cursor: "pointer",
      }}
      onClick={() => {
        setClick(!click);
      }}
    >
      {click ? (
        <img src={color} width={"24px"}></img>
      ) : (
        <img src={black} width={"24px"}></img>
      )}
    </button>
  );
};
