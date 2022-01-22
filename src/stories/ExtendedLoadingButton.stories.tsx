import React from "react";
import { Meta } from "@storybook/react";

import { ExtendedLoadingButton } from "..";

import BaseStyles from "../components/BaseStyles";
import { ComponentProps } from "../utils/types";

type ExtendedLoadingButtonProps = ComponentProps<typeof ExtendedLoadingButton>;

export default {
  title: "Components/ExtendedButton",
  component: ExtendedLoadingButton,
  decorators: [
    (Story) => {
      // Since portal roots are registered globally, we need this line so that each storybook
      // story works on its own.
      return <BaseStyles>{Story()}</BaseStyles>;
    },
  ],
  argTypes: {},
} as Meta;

export const ExtendedLoadingButton = (args: ExtendedLoadingButtonProps) => {
  return <ExtendedLoadingButton {...args}>Hello world</ExtendedLoadingButton>;
};

ExtendedLoadingButton.args = { isLoading: true };
