import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export const Cart = connect(mapStateToProps)(({ cart }) => {
  return (
    <div>
      <h3>Carrito de Compras</h3>
      {cart.length > 0 ? (
        cart.map((product, index) => {
          return (
            <Product key={index}>
              <ProductName>{product.name}</ProductName>
              Cantidad: {product.quantity}
            </Product>
          );
        })
      ) : (
        <p>Aun no has agregado productos al carrito</p>
      )}
    </div>
  );
});

const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const ProductName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;
