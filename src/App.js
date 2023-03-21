// src/App.js
import React from "react";
import "./App.css";
// import styled from "styled-components";
import { PageWrapper } from "./components/wrapper";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

// const Section = styled.section`
//   background-color: ${({ bgColor }) => bgColor || "inherit"};
//   color: ${({ textColor }) => textColor || "inherit"};
//   text-align: ${({ textAlign }) => textAlign || "left"};
//   padding: 3rem 0;
// `;

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <ScrollToTop />
        <Header />
      </PageWrapper>

      <Home />
      <Footer />
    </div>
  );
}

export default App;
