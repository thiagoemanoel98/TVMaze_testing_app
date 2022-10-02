import {setupServer} from 'msw/node';
import { handlers } from './handlers';


// intercepta o get()
export const server = setupServer(...handlers)