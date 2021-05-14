import { colors } from 'core';
import type { FC } from 'react';
import React from 'react';

import { Button } from './component';

export default {
  title: 'Brand A/atoms/Button',
  component: Button,
};

export const Basic: FC = () => (
  <Button color={colors.variants.Text.White} backgroundColor={colors.variants.Element.Black}>
    Click me
  </Button>
);
