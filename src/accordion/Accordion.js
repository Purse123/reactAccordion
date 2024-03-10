import React from "react";
import "./style.scss";
import { datas } from "./data";
import MyAccordion from "./MyAccordion";

function Accordion() {
  const items = datas;
  return (
      <div className="accordion">
        <section className="main">
          <h1>Accordion</h1>
            {items.map((item) => {
                // const { id, title, content } = item;
                // return <MyAccordion key={ id } title={ title } content={ content } />;
                const { id } = item;
                return <MyAccordion key={ id } { ...item } />;
            })}
        </section>
    </div>
  );
}

export default Accordion;
