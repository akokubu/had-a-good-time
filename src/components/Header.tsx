import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>Had a good time!!</h1>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding: 8px 24px;
  background-color: orange;
  h1 {
    color: white;
  }
`;
