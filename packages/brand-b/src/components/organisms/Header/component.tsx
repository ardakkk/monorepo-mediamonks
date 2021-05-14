import styled from '@emotion/styled';
import { Button } from 'components';
import { colors } from 'core';
import type { FC } from 'react';
import React, { useCallback } from 'react';

import { SearchInput } from './libs/SearchInput';
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
              src="https://www.drupal.org/files/mediamonks_logo_rgb_500x300.png"
              alt="logo"
            />
          </div>
          <SearchInput />
          <div className="header__button">
            <Button
              color={colors.variants.Element.Purple}
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
  background-color: ${colors.variants.Brand.Purple};

  .logo {
    width: 100px;
  }
`;
