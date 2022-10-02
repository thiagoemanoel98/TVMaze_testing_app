import {rest} from 'msw';

const handlers = [
    rest.get('shows/:showId/episodes', (request, response, context) => {
        return response(context.status(200), context.json([]))
    })
]