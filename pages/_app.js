import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/style.css'
import 'react-phone-number-input/style.css'

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
