import React from 'react';
import { motion } from "framer-motion";


const SingleAlert = ({ id, alert, onRemove, duration }) => {

    const alertType = (type) => {
        const alertTypes = { "success": "alert--success", "failed": "alert--failed" }

        return alertTypes[type]
    }

    const alertTitle = (type) => {
        const alerTitles = { "success": "Başarılı!", "failed": "Hata!" }

        return alerTitles[type];
    }


    const alertDurationBar = (type) => {
        const alertDurationBars = { "success": "alert__duration-bar--success", "failed": "alert__duration-bar--failed" }

        return alertDurationBars[type];
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onRemove(alert.id);
        }, duration * 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <motion.div key={id} initial={{ opacity: 0, translateX: 100 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.2, type: "tween" }} exit={{ opacity: 0, translateX: 100 }} className={'alert ' + alertType(alert.type)}>
            <div className='alert__body'>
                <p className='alert__title'>
                    {alertTitle(alert.type)}
                </p>
                <p className='alert__text'>
                    {alert.message}
                </p>
            </div>

            <div className='alert__close' onClick={e => onRemove(alert.id)}>
                <span className='alert__close-btn'>X</span>
            </div>
            <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: duration }} className={'alert__duration-bar ' + alertDurationBar(alert.type)}></motion.div>
        </motion.div>
    );
}

export default SingleAlert;
