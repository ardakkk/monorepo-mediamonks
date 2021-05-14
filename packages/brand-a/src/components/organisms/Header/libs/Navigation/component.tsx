import styled from '@emotion/styled';
import { colors } from 'core';
import type { FC } from 'react';
import React from 'react';

import type { Props } from './props';

const NavigationBase: FC<Props> = ({ items, ...rest }: Props) => (
  <nav {...rest}>
    <ul className="d-flex">
      {items?.length &&
        items.map((item, index) => (
          <li key={index} className="mr-2">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
    </ul>
  </nav>
);

export const Navigation = styled(NavigationBase)<Props>`
  a {
    text-decoration: none;
    color: ${colors.variants.Element.White};
  }
`;
