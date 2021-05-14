import type { FC } from 'react';
import React from 'react';

import { Header } from './component';

export default {
  title: 'Brand B/organisms/Header',
};

export const Basic: FC = () => (
  <div className="px-3">
    <Header />
  </div>
);
