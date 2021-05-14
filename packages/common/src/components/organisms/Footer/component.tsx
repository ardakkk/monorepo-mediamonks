import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import type { FC } from 'react';
import React from 'react';

import type { Props } from './props';

const FooterBase: FC<Props> = ({ ...rest }: Props) => (
  <footer {...rest}>
    <div className="d-flex justify-content-center align-items-end h-100">
      <p>© MediaMonks</p>
    </div>
  </footer>
);

export const Footer = styled(FooterBase, {
  shouldForwardProp: isPropValid,
})<Props>`
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;
