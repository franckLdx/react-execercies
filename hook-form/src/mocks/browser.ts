import { setupWorker } from 'msw'
import { loginHandlers } from './loginHandlers'

export const worker = setupWorker(...loginHandlers)