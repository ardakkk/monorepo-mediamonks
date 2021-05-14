import type { FC } from 'react';
import React from 'react';

import { Footer } from './component';

export default {
  title: 'Common/organisms/Footer',
};

export const Basic: FC = () => (
  <div className="p-3">
    <Footer />
  </div>
);
