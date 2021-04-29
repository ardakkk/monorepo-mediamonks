import React, { FC } from 'react';
import { Props } from "./props";
import styled from "@emotion/styled";

const ButtonBase: FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonBase)<Props>`
  background-color: #010103;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
`
