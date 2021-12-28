import React from 'react'

import ReactDOM from 'react-dom'
import App from './App'
import { start } from './mocks/worker'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'

import './index.css'

start();


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
