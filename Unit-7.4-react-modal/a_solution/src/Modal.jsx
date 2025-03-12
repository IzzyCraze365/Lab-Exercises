import React from "react";
import "./Modal.css";

function Modal(props) {
  if (props.modalState) {
    return (
      <main id="modal-background">
        <section id="modal-content">
          I am a modal!
          <button type="button" onClick={props.handleClick}>
            Close Modal
          </button>
        </section>
      </main>
    );
  }

  return <div style={{ display: "none" }}></div>;
}

export default Modal;
