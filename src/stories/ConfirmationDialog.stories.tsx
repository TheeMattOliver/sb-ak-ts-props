import React, { useState, useRef, useCallback } from "react";
import { Meta } from "@storybook/react";

import { ModalDialogProps } from "@atlaskit/modal-dialog";

import BaseStyles from "../components/BaseStyles";
import ConfirmationDialog from "../components/NaiveConfirmationDialog";
import { DangerConfirmationDialog } from "../components/NaiveConfirmationDialog";
import { WarningConfirmationDialog } from "../components/NaiveConfirmationDialog";

export default {
  title: "Naive/Modal Dialog",
  component: ConfirmationDialog,
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
  argTypes: {
    size: {
      defaultValue: "medium",
      control: {
        type: "radio",
        options: ["small", "medium", "large", "x-large"],
      },
    },
  },
} as Meta;

export const defaultConfirmationDialog = (args: ModalDialogProps) => (
  <ConfirmationDialog size={"medium"} {...args}>
    Default Confirmation Dialog
  </ConfirmationDialog>
);

export const dangerConfirmationDialog = (args: ModalDialogProps) => (
  <DangerConfirmationDialog size={"medium"} {...args}>
    Danger Confirmation Dialog
  </DangerConfirmationDialog>
);

export const warningConfirmationDialog = (args: ModalDialogProps) => (
  <WarningConfirmationDialog size={"medium"} {...args}>
    Warning Confirmation Dialog
  </WarningConfirmationDialog>
);
