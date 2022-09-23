import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/style.css'
import 'react-phone-number-input/style.css'
import AppStateContext from '../context/AppStateContext';
import DispatchContext from '../context/DispatchContext';
import { alertsInitial, alertsReducer } from '../reducers/AlertsReducer';
import Alerts from '../components/Alerts';



function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();
  const [alerts, alertsDispatch] = React.useReducer(alertsReducer, alertsInitial);

  return (
    <AppStateContext.Provider value={{ alertsContext: alerts }}>
      <DispatchContext.Provider value={{ alertsDispatch: alertsDispatch }}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Alerts />
        </QueryClientProvider>
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export default MyApp
