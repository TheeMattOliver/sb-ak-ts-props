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

const WarningConfirmationDialog = ({
  onClose,
  width,
  height,
  size = "large",
}: ModalDialogProps & ConfirmationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onDialogClose = useCallback(() => setIsOpen(false), []);

  const boldStyles = {
    fontWeight: "bold",
  };

  return (
    <>
      <Button
        ref={buttonRef}
        appearance="warning"
        onClick={() => setIsOpen(!isOpen)}
      >
        Show dialog
      </Button>
      <ModalTransition>
        {isOpen && (
          <Modal onClose={onDialogClose} width={size}>
            <ModalHeader>
              <ModalTitle appearance="warning">
                Delete the Newtown Repository
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              Bamboo will permanently delete all related configuration settings,
              artifacts, logos, and results. This can’t be undone.
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={onDialogClose}>
                Cancel
              </Button>
              <Button appearance="warning" onClick={onDialogClose} autoFocus>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default WarningConfirmationDialog;
