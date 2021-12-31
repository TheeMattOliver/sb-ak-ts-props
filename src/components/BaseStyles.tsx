import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ComponentProps } from "../utils/types";

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box; 
  }
  body { 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  }
`;

const Base = styled.div``;

export type BaseStylesProps = ComponentProps<typeof Base>;

function BaseStyles(props: BaseStylesProps) {
  const { children, ...rest } = props;

  return (
    <Base {...rest} data-portal-root>
      <GlobalStyle />
      {children}
    </Base>
  );
}

export default BaseStyles;
