import React from "react";
import { styled } from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header>
        <div>
          <h2>iStore</h2>
        </div>
        <LinkBlock>
          <NavLink to="/products" style={{ textDecoration: "none" }}>
            <h2>Products</h2>
          </NavLink>
          <NavLink to="/myCart" style={{ textDecoration: "none" }}>
            <h2>My Cart</h2>
          </NavLink>
          <NavLink to="/myOrders" style={{ textDecoration: "none" }}>
            <h2>My Orders</h2>
          </NavLink>
        </LinkBlock>
      </Header>
      <Outlet />
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: rgb(0, 136, 255);

  div {
    margin-left: 50px;
    color: #fff;
  }
`;
const LinkBlock = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-right: 50px;
`;
