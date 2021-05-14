import styled from '@emotion/styled';
import type { FC } from 'react';
import React, { useCallback } from 'react';

import type { Props } from './props';

const SearchInputBase: FC<Props> = ({ ...rest }: Props) => {
  const onSubmit = useCallback((e) => {
    e.preventDefault();

    alert('Submitted!');
  }, []);

  return (
    <form onSubmit={onSubmit} {...rest}>
      <input className="px-3 py-2" type="search" placeholder="Search..." />
    </form>
  );
};

export const SearchInput = styled(SearchInputBase)<Props>`
  input {
    border: none;
    border-radius: 3px;
  }
`;
