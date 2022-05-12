import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import { Blog, Cart, Error404, Home, Market } from "./components";
import { reducer } from "./reducers/marketReducer";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Container>
        <Menu>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/market">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/market" element={<Market />} />
          </Routes>
        </main>
        <aside>
          <Cart />
        </aside>
      </Container>{" "}
    </Provider>
  );
}

const Container = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
