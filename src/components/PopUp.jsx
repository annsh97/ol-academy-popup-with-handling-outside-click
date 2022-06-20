import React, { useEffect, useRef } from "react";

import { AiOutlineClose } from "react-icons/ai";
import "./App.css";

function PopUp(props) {
  const popup = useRef(null);

  const handleClick = (e) => {
    if (popup.current !== null) {
      if (!popup.current.contains(e.target)) {
        props.closePopUp();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="body">
      <div className="popup-box" ref={popup}>
        <button className="close-btn" onClick={() => props.closePopUp()}>
          <AiOutlineClose />
        </button>

        <br></br>
        <p>
          The Backup created wih this export functionnality may contain some
          sensitive data.. we suggest you to store this archive in a securised
          location.
        </p>
        <article></article>
      </div>
    </div>
  );
}

export default PopUp;
