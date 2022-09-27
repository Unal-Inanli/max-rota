import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/style.css'
import 'react-phone-number-input/style.css'
import AppStateContext from '../context/AppStateContext';
import DispatchContext from '../context/DispatchContext';
import { alertsInitial, alertsReducer } from '../reducers/AlertsReducer';
import Alerts from '../components/Alerts';
import AppLocale from '../components/AppLocale';
import { localeInitial, localeReducer } from '../reducers/LocalReducer';



function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();
  const [alerts, alertsDispatch] = React.useReducer(alertsReducer, alertsInitial);
  const [locale, localeDispatch] = React.useReducer(localeReducer, localeInitial);

  return (
    <AppStateContext.Provider value={{ alertsContext: alerts, localeContext: locale }}>
      <DispatchContext.Provider value={{ alertsDispatch: alertsDispatch, localeDispatch: localeDispatch }}>
        <QueryClientProvider client={queryClient}>
          <AppLocale>
            <Component {...pageProps} />
            <Alerts />
          </AppLocale>
        </QueryClientProvider>
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export default MyApp
