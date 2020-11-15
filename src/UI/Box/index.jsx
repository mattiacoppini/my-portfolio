import styled from "styled-components";

const Box = styled.div`
  display: ${({ display }) => display};
  width: ${({ width = "100%" }) => width};
  height: ${({ height }) => height};
  overflow: ${({ overflow }) => overflow};

  box-sizing: ${({ boxSizing = "border-box" }) => boxSizing};

  padding: ${({ padding }) => padding};

  background-color: ${({ bgColor }) => bgColor};

  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

export const FlexBox = styled(Box).attrs({ display: "flex" })``;

export default Box;
