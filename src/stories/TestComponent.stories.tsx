import React from "react";
import { Meta } from "@storybook/react";
import BaseStyles from "../components/BaseStyles";
import { ThemeProvider } from "../components/ThemeProvider";

import { TestComponent } from "..";
import { ComponentProps } from "../utils/types";

type TestComponentProps = ComponentProps<typeof TestComponent>;

export default {
  title: "Components/TestButton",
  component: TestComponent,
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
  argTypes: {},
} as Meta;

export const testComponent = (args: TestComponentProps) => {
  return <TestComponent {...args}>Hello world</TestComponent>;
};
