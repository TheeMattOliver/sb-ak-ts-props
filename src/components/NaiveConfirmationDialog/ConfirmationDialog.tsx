import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import Button from "@atlaskit/button";
import ModalBase from "./ModalBase";
import Modal, {
  ModalDialogProps,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

export type ConfirmationDialogProps = {
  size: string;
};

const ConfirmationDialog = ({
  onClose,
  width,
  height,
  size,
}: ModalDialogProps & ConfirmationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onDialogClose = useCallback(() => setIsOpen(false), []);

  const boldStyles = {
    fontWeight: "bold",
  };

  return (
    <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      <ModalTransition>
        {isOpen && (
          <Modal onClose={onDialogClose} width={size}>
            <ModalHeader>
              <ModalTitle>Duplicate this page</ModalTitle>
            </ModalHeader>
            <ModalBody>
              Duplicating this page will make it a child page of{" "}
              <span style={boldStyles}>Search - user exploration</span>, in the{" "}
              <span style={boldStyles}>Search & Smarts</span> space.
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={onDialogClose}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={onDialogClose} autoFocus>
                Duplicate
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default ConfirmationDialog;
