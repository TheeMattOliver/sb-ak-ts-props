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

const DangerConfirmationDialog = ({
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
        appearance="danger"
        onClick={() => setIsOpen(!isOpen)}
      >
        Show dialog
      </Button>
      <ModalTransition>
        {isOpen && (
          <Modal onClose={onDialogClose} width={size}>
            <ModalHeader>
              <ModalTitle appearance="danger">
                You’re about to delete this page.
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>
                Deleting this page could have disastrous effects, including but
                not limited to destroying all life on Earth. Before you delete
                it permanently, there’s some things you should know:
              </p>
              <ul>
                <li>4 pages have links to this page that will break</li>
                <li>2 child pages will be left behind in the page tree</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle">Cancel</Button>
              <Button appearance="danger" onClick={onDialogClose} autoFocus>
                Delete the universe
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default DangerConfirmationDialog;
