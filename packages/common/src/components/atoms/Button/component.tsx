import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import type { FC } from 'react';
import React from 'react';

import type { Props } from './props';

const ButtonBase: FC<Props> = ({ children, ...rest }: Props) => (
  <button {...rest} type="button">
    {children}
  </button>
);

export const Button = styled(ButtonBase, {
  shouldForwardProp: isPropValid,
})<Props>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
`;
