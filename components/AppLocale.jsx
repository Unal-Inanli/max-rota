import axios from 'axios';
import React from 'react';
import AppStateContext from '../context/AppStateContext';
import DispatchContext from '../context/DispatchContext';

const AppLocale = ({ children }) => {

    const { localeDispatch } = React.useContext(DispatchContext);
    const { localeContext } = React.useContext(AppStateContext);
    const [show, setShow] = React.useState(false);

    React.useMemo(() => {
        if (!localeContext.country_code) {
            axios.get("https://ipapi.co/json/").then(res => {
                localeDispatch({
                    name: "setLocale",
                    country_code: res.data.country_code,
                    country: res.data.country_name
                })

                setShow(true);
            });
        }
    }, []);



    return (
        <>
            {show && children}
        </>
    );
}

export default AppLocale;
