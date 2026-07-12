import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      <h1>Accordion</h1>
      {data.map((el, index) => (
        <AccordionItem
          title={el.title}
          number={index}
          key={index}
          curOpen={curOpen}
          onClick={setIsOpen}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        title="Custom Accordion Title"
        number={3}
        curOpen={curOpen}
        onClick={setIsOpen}
      >
        This is a custom accordion content added manually using children
        property.
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ title, number, curOpen, onClick, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = number === curOpen;

  function handleToggle() {
    onClick(number === curOpen ? null : number);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
