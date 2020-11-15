import styled from "styled-components";
import Box from "../../UI/Box";

const Slide = styled(Box).attrs(({ offset = 0 }) => ({
  height: `calc(100vh - ${offset}px)`,
}))``;

export default Slide;
