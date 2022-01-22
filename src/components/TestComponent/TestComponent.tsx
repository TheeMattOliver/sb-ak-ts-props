import React from "react";
import styled from "styled-components";
import { get } from "../../constants";

export const TestComponent: React.FC<{}> = (props) => {
  return (
    <Wrapper {...props}>
      <h1>testing</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed ${get("colors.btn.border")};
  padding: 16px 32px;
  width: fit-content;
  color: ${get("colors.btn.text")};
`;
