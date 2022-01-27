import React from "react";
import { Meta } from "@storybook/react";
import BaseStyles from "../components/BaseStyles";
import { ThemeProvider } from "../components/ThemeProvider";

import { ExtendedButton } from "..";

import { ComponentProps } from "../utils/types";

type ExtendedButtonProps = ComponentProps<typeof ExtendedButton>;

export default {
  title: "Components/ExtendedButton",
  component: ExtendedButton,
  decorators: [
    (Story) => {
      // Since portal roots are registered globally, we need this line so that each storybook
      // story works on its own.
      return (
        <ThemeProvider>
          <BaseStyles>{Story()}</BaseStyles>
        </ThemeProvider>
      );
    },
  ],
  argTypes: {
    appearance: {
      control: {
        type: "select",
        options: [
          "default",
          "danger",
          "link",
          "primary",
          "subtle",
          "subtle-link",
          "warning",
          "punky",
          "halloween",
        ],
      },
    },
  },
} as Meta;

export const extendedButton = (args: ExtendedButtonProps) => {
  return <ExtendedButton {...args}>Hello world</ExtendedButton>;
};

extendedButton.args = {
  appearance: "punky",
};
