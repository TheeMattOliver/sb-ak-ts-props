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
  -webkit-box-align: baseline;
  align-items: baseline;
  border-width: 0px;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-flex;
  font-size: inherit;
  font-style: normal;
  font-family: inherit;
  font-weight: 500;
  max-width: 100%;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  white-space: nowrap;
  cursor: pointer;
  height: 2.28571em;
  line-height: 2.28571em;
  padding: 0px 10px;
  vertical-align: middle;
  width: auto;
  -webkit-box-pack: center;
  justify-content: center;
`;

const HalloweenButton = styled.button<ExtendedButtonProps>`
  background-color: ${(p) => (p.appearance === "halloween" ? "orange" : "")};
  color: ${(p) => (p.appearance === "halloween" ? "black" : "")};
  -webkit-box-align: baseline;
  align-items: baseline;
  border-width: 0px;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-flex;
  font-size: inherit;
  font-style: normal;
  font-family: "Creepster", cursive;
  font-weight: 400;
  max-width: 100%;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  white-space: nowrap;
  cursor: pointer;
  height: 2.28571em;
  line-height: 2.28571em;
  padding: 0px 10px;
  vertical-align: middle;
  width: auto;
  -webkit-box-pack: center;
  justify-content: center;
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
