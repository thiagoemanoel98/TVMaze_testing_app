import React from 'react';
import {render} from 'test-utils';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    test('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);
      expect(getByText('7')).toBeTruthy(); // Esse valor existe? está na tela?
    });

    test('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('rating was NOT passed', () => {
    it('return nothing', () => {
      // pra nao renderizar com o query provider
      const {container} = render(<StarRating />, {wrapper: undefined}); // component pai desse component
      expect(container.children.length).toEqual(0); // sem "filhos"/childrens, vazio
    });
  });
});

// coverage => Relatorio que mostra o quanto nosso teste está cobrindo o codigo
