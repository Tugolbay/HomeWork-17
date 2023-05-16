import React from "react";
import { styled } from "styled-components";
import { Buttons } from "../UI/Buttons";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <Container>
        <h3>My Cart page</h3>
      </Container>
      <Btn>
        <Buttons onClick={goBack} />
      </Btn>
    </>
  );
};

const Container = styled.div`
  width: 1300px;
  height: 120px;
  background-color: #fff;
  margin-top: 50px;
  margin-left: 80px;
  h3 {
    position: relative;
    top: 20px;
    left: 50px;
  }
`;

const Btn = styled.div`
  margin-top: 30px;
  margin-left: 80px;
`;
