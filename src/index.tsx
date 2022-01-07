import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import { basename } from 'path'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// eslint-disable-next-line no-lone-blocks
{ /* <BrowserRouter basename={'/joku-kansio'} */ }
