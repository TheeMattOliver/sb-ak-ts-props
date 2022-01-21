import React from "react";
import { Meta } from "@storybook/react";

import { AtlasLoadingButton } from "..";

import BaseStyles from "../components/BaseStyles";
import { ComponentProps } from "../utils/types";

type AtlasLoadingButtonProps = ComponentProps<typeof AtlasLoadingButton>;

export default {
  title: "Components/AtlasButton",
  component: AtlasLoadingButton,
  decorators: [
    (Story) => {
      // Since portal roots are registered globally, we need this line so that each storybook
      // story works on its own.
      return <BaseStyles>{Story()}</BaseStyles>;
    },
  ],
  argTypes: {},
} as Meta;

export const atlasLoadingButton = (args: AtlasLoadingButtonProps) => {
  return <AtlasLoadingButton {...args}>Hello world</AtlasLoadingButton>;
};

atlasLoadingButton.args = { isLoading: true };
