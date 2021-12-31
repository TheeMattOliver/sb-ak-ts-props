import React, { useState, useRef, useCallback } from "react";
import { Meta } from "@storybook/react";

import { ModalDialogProps } from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";

import BaseStyles from "../components/BaseStyles";
import OtherModalDialog from "../components/WrappedModalDialog/WrappedModalDialog";

export default {
  title: "Wrapped/Modal Dialog",
  component: OtherModalDialog,
  decorators: [
    (Story) => {
      // Since portal roots are registered globally, we need this line so that each storybook
      // story works on its own.
      return (
        <BaseStyles>
          <Story />
        </BaseStyles>
      );
    },
  ],
  argTypes: {},
} as Meta;

export const defaultModalDialog = (args: ModalDialogProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      {isOpen && (
        <OtherModalDialog {...args} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

defaultModalDialog.args = {
  actions: [],
  heading: "Check out the new features",
  children:
    "We've made a bunch of changes so you can get back to doing the things you value most.",
};
