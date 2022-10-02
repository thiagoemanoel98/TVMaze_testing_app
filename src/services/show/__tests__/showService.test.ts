import {showMocks} from 'test/mocks/showMocks';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    //beforeAll(() => {
    // monitora essa função - quero ver o que tá acontecendo com essa função
    // Mas chama essa função mocada - simula a resposta do axios
    //jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    //});
    test('when API return episode list return a all season names', async () => {
      const groupedEpisodes = await showService.getEpisodes('300');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();

      expect(groupedEpisodes.seasonNames.length).toBe(2);

      //expect(spyFn).toBeCalledTimes(1); // foi chamada uma vez
    });

    test('when API return episode list return the episodes grouped by season', async () => {
      //jest.setTimeout(30000);
      //jest.spyOn(api, 'get').mockResolvedValueOnce({data: episodeList});
      const groupedEpisodes = await showService.getEpisodes('300');

      const temp1 = groupedEpisodes.seasons[1];
      const temp2 = groupedEpisodes.seasons[2];

      console.log({temp1});

      expect(temp1[0]).toEqual(showMocks.episode1);
      expect(temp1[1]).toEqual(showMocks.episode2);

      expect(temp2[0]).toEqual(showMocks.episode22);
      expect(temp2[1]).toEqual(showMocks.episode23);
    });
  });
});
