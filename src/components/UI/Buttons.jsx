import React from "react";
import { styled } from "styled-components";

export const Buttons = (props) => {
  return <Button onClick={props.onClick}>Go back</Button>;
};
const Button = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 20px;
  border: none;
  color: #fff;
  background-color: rgb(3, 176, 141);
`;
