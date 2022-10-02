import {rest} from 'msw';
import { BASE_URL } from 'src/services/api';
import { showMocks } from 'test/mocks/showMocks';

export const handlers = [
    rest.get(`${BASE_URL}shows/:showId/episodes`, (request, response, context) => {
        return response(context.status(200), context.json(showMocks.episodeList))
    })
]