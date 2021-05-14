import type { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly color?: string;
  readonly backgroundColor?: string;
};
