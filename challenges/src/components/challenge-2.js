import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#3f22ff",
  expanded = false,
  className = "",
}) {
  const [toggle, setToggle] = useState(expanded);

  return (
    <div className={className}>
      {toggle
        ? children
        : `${children.split(" ", collapsedNumWords).join(" ", ",") + "..."}`}
      <span
        style={{ color: buttonColor, cursor: "pointer", marginLeft: "5px" }}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
