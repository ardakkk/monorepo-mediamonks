import type { FC } from 'react';
import React from 'react';

import { Button } from './component';

export default {
  title: 'Common/atoms/Button',
  component: Button,
};

export const Basic: FC = () => (
  <Button color="#fff" backgroundColor="#000">
    Click me
  </Button>
);
