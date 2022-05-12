import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (idProduct, name) => {
      dispatch({
        type: "ADD_PRODUCT_TO_CART",
        idProduct: idProduct,
        name: name,
      });
    },
  };
};

export const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ products, addProductToCart }) => {
  return (
    <div>
      <h3>Productos</h3>
      <ProductsContainer>
        {products.map((product, index) => {
          return (
            <Product key={index}>
              <p>{product.name}</p>
              <Button
                onClick={() => addProductToCart(product.id, product.name)}
              >
                Agregar al carrito
              </Button>
            </Product>
          );
        })}
      </ProductsContainer>
    </div>
  );
});

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`;

const Product = styled.div`
  padding: 20px;
  border: 1px solid #ebeef3;
  border-radius: 5px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  border: none;
  background: #1c85e8;
  color: #fff;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  border-radius: 3px;
  transition: 0.3s ease all;

  &:hover {
    background: #1c6ab9;
  }
`;
