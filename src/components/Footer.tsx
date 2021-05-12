import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterStyled>
      <small>copyright 2021 akokubu</small>
    </FooterStyled>
  );
};

const FooterStyled = styled.header`
  padding: 8px 24px;
  background-color: orange;
  small {
    color: white;
    text-align: center;
  }
`;
