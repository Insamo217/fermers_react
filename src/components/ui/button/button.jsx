import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 60px;
  background-color: #fc9b27;
  border: none;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;

function Button(props) {
  return <StyledButton>{props.name}</StyledButton>;
}

export default Button;
