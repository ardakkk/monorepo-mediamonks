import { Footer, Header } from 'components/organisms';
import { colors } from 'core';
import type { FC } from 'react';
import React from 'react';

import type { Props } from './props';

export const MainTemplate: FC<Props> = ({ children }: Props) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer color={colors.variants.Text.White} backgroundColor={colors.variants.Brand.Black} />
  </div>
);
