import React from "react";
import styled from "styled-components";
import { FlexBox } from "../UI/Box";

const HeaderWrapper = styled(FlexBox).attrs(({ theme }) => ({
  width: "100%",
  height: "40px",
  bgColor: theme.Header.bgColor,
  padding: theme.Header.padding,
}))``;

const Header = () => {
  return <HeaderWrapper />;
};

export default Header;
