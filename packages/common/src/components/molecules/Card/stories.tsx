import type { FC } from 'react';
import React from 'react';

import { Card } from './component';

export default {
  title: 'Common/molecules/Card',
};

export const Basic: FC = () => (
  <div className="p-3">
    <Card color="#000" />
  </div>
);
