import React from "react";
import { styled } from "styled-components";
import { Buttons } from "../UI/Buttons";
import { Link, Outlet, useNavigate } from "react-router-dom";

const product = [
  {
    id: "1",
    image: "https://www.myphone.kg/files/media/17/17204.webp",
    title: "Iphone 14 pro",
    price: "$1320",
  },
  {
    id: "2",
    image: "https://www.myphone.kg/files/media/13/13410.jpg",
    title: "Iphone 13 pro",
    price: "$1120",
  },
  {
    id: "3",
    image: "https://www.myphone.kg/files/media/13/13486.jpg",
    title: "Iphone 12 pro",
    price: "$650",
  },
];

export const Iphone = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <>
      <Container>
        {product.map((el) => {
          return (
            <Link style={{ textDecoration: "none" }} to={`${el.id}`}>
              <Image src={el.image} />
              <h2>{el.title}</h2>
              <h3>{el.price}</h3>
            </Link>
          );
        })}
      </Container>
      <Btn>
        <Buttons onClick={goBack} />
      </Btn>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 150px;
  justify-content: space-around;
  h2 {
    color: black;
    margin-top: -80px;
    margin-left: 60px;
  }
  h3 {
    color: black;
    margin-top: -10px;
    margin-left: 60px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 300px;
  padding: 60px;
  padding-bottom: 100px;
  background-color: #fff;
  border-radius: 15px;
`;

const Btn = styled.div`
  margin-top: 20px;
  margin-left: 80px;
`;
