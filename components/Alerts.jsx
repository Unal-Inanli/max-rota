import React from 'react';
import AppStateContext from '../context/AppStateContext';
import { AnimatePresence, motion } from "framer-motion";
import DispatchContext from '../context/DispatchContext';
import SingleAlert from './SingleAlert';

const MotionSingleAlert = motion(SingleAlert)
const Alerts = () => {

    const { alertsContext } = React.useContext(AppStateContext)
    const { alertsDispatch } = React.useContext(DispatchContext)


    const removeAlert = (id) => {
        alertsDispatch({
            name: "remove",
            id
        })
    }

    return (
        <div className='alerts'>
            <AnimatePresence>
                {alertsContext && alertsContext.map((alert, index) => {
                    return (
                        <MotionSingleAlert id={index} alert={alert} onRemove={removeAlert} duration={7} key={index} />
                    )
                })}
            </AnimatePresence>
        </div>
    );
}

export default Alerts;
