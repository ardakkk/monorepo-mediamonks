import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import type { FC } from 'react';
import React from 'react';

import type { Props } from './props';

const CardBase: FC<Props> = ({ ...rest }: Props) => (
  <figure {...rest}>
    <img
      className="card__img"
      src="https://images.unsplash.com/photo-1530947443747-bcaaacd048d0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="photo"
    />
    <figcaption className="p-2">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.{' '}
      </p>
    </figcaption>
  </figure>
);

export const Card = styled(CardBase, {
  shouldForwardProp: isPropValid,
})<Props>`
  max-width: 250px;
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;

  .card {
    &__img {
      width: 100%;
    }
  }
`;
