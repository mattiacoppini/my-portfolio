import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Slide from "../components/Slide";
import { FlexBox } from "../UI/Box";

const MainWrapper = styled(FlexBox).attrs({
  flexWrap: "wrap",
  height: "100%",
})``;
const ContentWrapper = styled(MainWrapper).attrs({
  overflow: "auto",
  height: "calc(100% - 40px)",
})``;

const Main = () => {
  return (
    <MainWrapper className="main-template">
      <Header />
      <ContentWrapper className="main-content">
        <Slide offset={40} bgColor="pink">
          Slide 1
        </Slide>
        <Slide bgColor="chocolate">Slide 2</Slide>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Main;
