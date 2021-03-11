import * as React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button``;

export const Button: React.FC = ({ children, ...restProps }) => {
  return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};
