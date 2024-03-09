import { setupWorker } from 'msw'
import { creditCardHandlers } from './creditCardHandler'
import { loginHandlers } from './loginHandlers'

export const worker = setupWorker(...loginHandlers, ...creditCardHandlers)