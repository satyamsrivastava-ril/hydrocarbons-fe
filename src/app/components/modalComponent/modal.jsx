import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.scss";

const ModalComp = (props) => {
  return (
    <Modal
      className={props.class}
      show={props.showModal}
      onHide={props.hideModal}
    >
      <Modal.Header closeButton>
        <Modal.Title className="modalTitle">{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={props.classBody}>{props.modalBody}</Modal.Body>
      <Modal.Footer>{props.modalFooter}</Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
