import type { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLElement> & {
  readonly backgroundColor?: string;
  readonly color?: string;
};
