import React from "react";
import styled, { StyledComponent } from "styled-components";
import Button from "@atlaskit/button";
import { ButtonProps, BaseOwnProps } from "@atlaskit/button";
import { Appearance } from "@atlaskit/button";

import { get } from "../../constants";

type NewAppearance = "punky" | "halloween";

type ExtendedAppearance = NewAppearance & Appearance;

interface ExtendedButtonProps
  extends Omit<BaseOwnProps, "appearance" | "onClick"> {
  appearance: ExtendedAppearance;
}

/**
 * Goal: extend appearance Apperance type to accept different appearance values
 * and style accordingly
 */
const ExtendedButton = ({ appearance, ...props }: ExtendedButtonProps) => {
  let Component;
  if (appearance === "punky") {
    Component = PunkyButton;
  } else if (appearance === "halloween") {
    Component = HalloweenButton;
  } else {
    Component = Button;
  }
  return <Component appearance={appearance} {...props} />;
};

const PunkyButton = styled.button<ExtendedButtonProps>`
  background-color: ${(p) => (p.appearance === "punky" ? "deeppink" : "")};
  color: ${(p) => (p.appearance === "punky" ? "#FEEC2B" : "")};
`;

const HalloweenButton = styled.button<ExtendedButtonProps>`
  background-color: ${(p) => (p.appearance === "halloween" ? "orange" : "")};
  color: ${(p) => (p.appearance === "halloween" ? "black" : "")};
`;

export default ExtendedButton;

// const SIZES = {
//   small: {
//     "--borderRadius": `${6 / 16}rem`,
//     "--fontSize": `${14 / 16}rem`,
//     "--padding": `${7 / 16}rem ${16 / 16}rem`,
//     "--boxShadow":
//       "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
//   },
//   medium: {
//     "--borderRadius": `${6 / 16}rem`,
//     "--fontSize": `${16 / 16}rem`,
//     "--padding": `${7 / 16}rem ${16 / 16}rem`,
//     "--boxShadow":
//       "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
//   },
//   large: {
//     "--borderRadius": `${6 / 16}rem`,
//     "--fontSize": `${20 / 16}rem`,
//     "--padding": `${9 / 16}rem ${20 / 16}rem`,
//     "--boxShadow":
//       "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
//   },
// };
