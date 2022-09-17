import React, {createRef} from 'react';
import {render, act} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

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
});
