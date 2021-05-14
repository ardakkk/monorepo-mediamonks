import type { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLElement> & {
  readonly items?: ReadonlyArray<{
    readonly label: string;
    readonly href: string;
  }>;
};
