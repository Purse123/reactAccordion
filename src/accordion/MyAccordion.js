import React, { useState } from "react";

function MyAccordion({ title, content }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main_heading">
        <p onClick={() => { setShow(!show)}}>{ show? "➖" : "➕" }</p>
        <h3>{ title }</h3>
      </div>
      {
        show && <p className="content">{content}</p>
      }
    </>
  );
}

export default MyAccordion;