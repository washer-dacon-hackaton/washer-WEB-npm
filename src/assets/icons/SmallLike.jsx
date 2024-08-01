import color from "./HeartColor.svg";
import black from "./HeartBlack.svg";
import { useState } from "react";

export const SmallLike = ({ isClicked }) => {
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
        <img src={color} width={"20px"}></img>
      ) : (
        <img src={black} width={"20px"}></img>
      )}
    </button>
  );
};
