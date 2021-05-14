import styled from '@emotion/styled';
import { colors } from 'core';
import type { FC } from 'react';
import React, { useCallback } from 'react';

import { Button } from '../../atoms/Button';
import { Navigation } from './libs/Navigation';
import type { Props } from './props';

const mockNavItems = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
];

const HeaderBase: FC<Props> = ({ ...rest }: Props) => {
  const onButtonClick = useCallback(() => {
    alert('Hi✋!');
  }, []);

  return (
    <header {...rest}>
      <div className="container py-2">
        <div className="row justify-content-between align-items-center flex-column flex-lg-row">
          <div className="header__logo">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/8/86/Logo_mediamonks.jpg"
              alt="logo"
            />
          </div>
          <Navigation items={mockNavItems} />
          <div className="header__button">
            <Button
              color={colors.variants.Element.Black}
              backgroundColor={colors.variants.Element.White}
              onClick={onButtonClick}
            >
              Click me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header = styled(HeaderBase)<Props>`
  display: flex;
  background-color: ${colors.variants.Brand.Black};

  .logo {
    width: 100px;
  }
`;
