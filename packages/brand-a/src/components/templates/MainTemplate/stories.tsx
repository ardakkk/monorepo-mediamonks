import type { FC } from 'react';
import React from 'react';

import { MainTemplate } from './component';

export default {
  title: 'Brand A/templates/MainTemplate',
};

export const Basic: FC = () => (
  <MainTemplate>
    <div className="px-4">Content here</div>
  </MainTemplate>
);
