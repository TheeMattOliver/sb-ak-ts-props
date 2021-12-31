import React from "react";
import {
  default as Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@atlaskit/modal-dialog";

type ModalPropsType = React.ComponentProps<typeof Modal>;
type ModalBodyPropsType = React.ComponentProps<typeof ModalBody>;
type ModalHeaderPropsType = React.ComponentProps<typeof ModalHeader>;
type ModalFooterPropsType = React.ComponentProps<typeof ModalFooter>;
type ModalTitlePropsType = React.ComponentProps<typeof ModalTitle>;
// 👆 we want all this stuff passed along into our component, so we can use it all in Storybook

export {
  Modal as default,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalTitle,
};
