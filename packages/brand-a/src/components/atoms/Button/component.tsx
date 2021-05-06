import styled from '@emotion/styled';
import type { FC } from 'react';
import React from 'react';

import type { Props } from './props';

const ButtonBase: FC<Props> = ({ children, ...rest }: Props) => (
  <button {...rest}>{children}</button>
);

export const Button = styled(ButtonBase)<Props>`
  background-color: #010103;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
`;
