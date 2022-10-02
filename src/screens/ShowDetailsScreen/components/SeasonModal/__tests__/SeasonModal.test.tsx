import React, {createRef} from 'react';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';
import { render, act, fireEvent } from 'test-utils';

describe('SeasonModal', () => {
  test('Show all season option', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={season => console.log(season)}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText('Season', {exact: false}).length).toEqual(3);
  });

  test('call onSelectedSeason with corret season when season option was pressed', () => {
    // Abrir o modal
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={onSelectSeasonMock}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    // Pressionar um elemento na tela
    const season2Element = getByText(/season 3/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('3');
  });
});
