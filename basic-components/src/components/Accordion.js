import { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      <h1>Accordion</h1>
      {data.map((el, index) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          number={index}
          key={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, number }) {
  const [isActive, setIsActive] = useState();

  return (
    <div
      className={isActive ? "item open" : "item"}
      onClick={() => setIsActive(!isActive)}
    >
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isActive ? "-" : "+"}</p>
      {isActive && <div className="content-box">{text}</div>}
    </div>
  );
}
