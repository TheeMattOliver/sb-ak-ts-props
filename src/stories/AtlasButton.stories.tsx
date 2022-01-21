import React from "react";
import { Meta } from "@storybook/react";

import { AtlasButton } from "..";

import BaseStyles from "../components/BaseStyles";
import { ThemeProvider } from "../components/ThemeProvider";

import { ComponentProps } from "../utils/types";

type AtlasButtonProps = ComponentProps<typeof AtlasButton>;

export default {
  title: "Components/AtlasButton",
  component: AtlasButton,
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
        ],
      },
    },
  },
} as Meta;

export const atlasButton = (args: AtlasButtonProps) => {
  return <AtlasButton {...args}>Hello world</AtlasButton>;
};
