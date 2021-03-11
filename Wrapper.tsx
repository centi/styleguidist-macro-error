import React from "react";
import { ThemeProvider } from "styled-components";

const Wrapper: React.FC = ({ children }) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

export default Wrapper;
